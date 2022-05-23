import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const SelectedProduct = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  gap: 10px;
  margin: 15px 0;
  & svg {
    font-size: 15px;
    margin: 0 5px;
    cursor: pointer;
  }
`;
