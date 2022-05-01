import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useElementWidth = (): [number, MutableRefObject<HTMLDivElement>] => {
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const [width, setWidth] = useState(0);
  const resizeHandler = () => {
    setWidth(ref.current?.offsetWidth);
  };
  useEffect(() => {
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [ref]);
  return [width, ref];
};
