import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  box-sizing: border-box;
}
  html {
    font-size: 80%;
  }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.sm}) {
    html {
      font-size: 100%;
    }
  }
`;
