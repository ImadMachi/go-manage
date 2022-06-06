import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = { appId: "29d152c34aa45e56414668ec94ca8c0cb", popupWidget: true, automaticChatOpenOnNavigation: true };
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0];
      h.appendChild(s);
      // @ts-ignore
      window.kommunicate = m;
      m._globals = kommunicateSettings;
      //@ts-ignore
    })(document, window.kommunicate || {});
  }, []);
  return <div></div>;
};

export default Chatbot;
