import React from "react";
import { createContext } from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { DefaultTheme, ThemeProvider } from "styled-components";
import App from "./App";
import GlobalCSS from "./common/style/global-style";
import { lightTheme, themeReducer } from "./common/style/theme";

export interface AppContextInterface {
  theme: DefaultTheme;
  dispatch: any;
}
export const AppContext = createContext<AppContextInterface | null>(null);

// const { dispatch } = useContext(AppContext);
// const toggleTheme = () => {
//   dispatch({ type: "toggleTheme" });
// };

const Index = () => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ theme, dispatch }}>
        <GlobalCSS />
        <Provider store={store}>
          <App />
        </Provider>
      </AppContext.Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
