import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        dark: string;
        main: string;
        light: string;
      };
      secondary: {
        dark: string;
        main: string;
        light: string;
      };
      textPrimary: string;
    };
    sizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
