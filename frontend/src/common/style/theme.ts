import { DefaultTheme } from "styled-components";

enum ActionType {
  setDark = "setDark",
  setLight = "setLight",
}

interface Action {
  type: ActionType;
}

export function themeReducer(state: DefaultTheme, action: Action) {
  switch (action.type) {
    case "setDark":
      return darkTheme;
    case "setLight":
      return lightTheme;
    default:
      return state;
  }
}

export const lightTheme: DefaultTheme = {
  menu: {
    bg: "#2B3140",
    textPrimary: "#f8f8f8",
    textSecondary: "#c2cce3",
  },
  primary: "#556ee6",
  secondary: "#34C38F",
  bgPrimary: "#FFFFFF",
  bgSecondary: "#F4F5F8",
  textPrimary: "#495057",
  textSecondary: "#74788d",

  sm: "0.9rem",
  md: "1rem",
  lg: "1.35rem",

  bp: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  bgPrimary: "#2B3140",
  bgSecondary: "#222736",
  textPrimary: "#f8f8f8",
  textSecondary: "#c2cce3",
};
