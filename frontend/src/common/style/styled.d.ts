import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: string;
    menu: {
      bg: string;
      textPrimary: string;
      textSecondary: string;
    };

    primary: string;
    secondary: string;
    bgPrimary: string;
    bgSecondary: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;

    success: string;
    danger: string;
    warning: string;
    info: string;

    sm: string;
    md: string;
    lg: string;

    bp: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
