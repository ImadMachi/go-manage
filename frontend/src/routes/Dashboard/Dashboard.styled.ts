import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  @media screen and (min-width: ${({ theme }) => theme.bp.md}) {
    margin-left: 300px;
  }
`;
