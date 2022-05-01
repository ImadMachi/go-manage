import styled from "styled-components";

export const Main = styled.main`
  min-height: 100vh;
  padding: 0 1rem;
  @media screen and (min-width: ${({ theme }) => theme.bp.lg}) {
    margin-left: 280px;
  }
`;
