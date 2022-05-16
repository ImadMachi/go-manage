import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  max-width: 75rem;
  width: 90%;
  margin: auto;
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-shadow: 1px 1px 20px 2px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #495057;
  margin-top: 0;
`;

export const Grid = styled.div`
  display: grid;
  row-gap: 10px;
  column-gap: 30px;

  @media (min-width: ${({ theme }) => theme.bp.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;
