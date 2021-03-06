import "./statics/polyfills";
import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";
import GlobalCSS from "./common/style/global-style";
import { lightTheme, themeReducer } from "./common/style/theme";
import store from "./features/store";
import "normalize.css";
// @ts-ignore
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";
import Chatbot from "./components/Chatbot";

Kommunicate.init("29d152c34aa45e56414668ec94ca8c0cb");

export interface ThemeContextInterface {
  theme: DefaultTheme;
  dispatch: any;
}

// export const ThemeContext = createContext<ThemeContextInterface | null>(null);
export const ThemeContext = createContext<any>(null);

// const { dispatch } = useContext(AppContext);
// const toggleTheme = () => {
//   dispatch({ type: "toggleTheme" });
// };

const Index = () => {
  const [theme, dispatch] = useReducer(
    themeReducer,
    localStorage.getItem("goManage:mode") ? JSON.parse(localStorage.getItem("goManage:mode") || "") : lightTheme
  );

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, dispatch }}>
        <GlobalCSS />
        <Provider store={store}>
          <App />
          <Chatbot />
        </Provider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
