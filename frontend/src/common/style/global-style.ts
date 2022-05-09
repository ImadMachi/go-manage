import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  /* html {
    font-size: 80%;
  } */
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ theme }) => theme.bgSecondary};
  }
  @media screen and (min-width: ${({ theme }) => theme.bp.sm}) {
    /* html {
      font-size: 100%;
    } */
  }

  @media (hover: hover) {
  button {
    cursor: pointer;
  }
}
`;
