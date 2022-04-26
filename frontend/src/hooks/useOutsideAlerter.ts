// import { Dispatch, SetStateAction, useEffect } from "react";

// export const useOutsideAlerter = (htmlELEM: HTMLElement | null, setIsOpen: Dispatch<SetStateAction<boolean>>) => {
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (htmlELEM && !htmlELEM.contains(event.target as Node)) {
//         console.log("test");
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("click", handleClickOutside);
//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [htmlELEM]);
// };

import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useOutsideAlerter = (): [MutableRefObject<HTMLDivElement>, boolean, () => void] => {
  const ref = useRef<HTMLElement>(null) as MutableRefObject<HTMLDivElement>;

  const [isVisible, setIsVisible] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (!ref?.current?.contains(event.target as Node)) {
      setIsVisible((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const setIsVisibleTrue = () => {
    setIsVisible(false);
  };
  return [ref, isVisible, setIsVisibleTrue];
};
