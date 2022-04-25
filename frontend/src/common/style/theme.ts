import { DefaultTheme } from "styled-components";

const colors = {
  primary: {
    dark: "#0069d9",
    main: "#007bff",
    light: "#3093fd",
  },
  secondary: {
    dark: "",
    main: "#ffd43b",
    light: "",
  },
  textPrimary: "#333",
};

const sizes = {
  sm: "0.875rem",
  md: "1rem",
  lg: "1.13rem",
  xl: "1.4rem",
  xxl: "1.6rem",
};

export const theme: DefaultTheme = {
  colors,
  sizes,
};
