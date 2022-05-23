import styled from "styled-components";

function generateCols(cols: number) {
  let frs = "";
  while (cols--) {
    frs += "1fr ";
  }
  return frs;
}

interface GridProps {
  cols: number;
}
export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ cols }) => generateCols(cols)};
  margin-bottom: 10px;
`;

export const TableRow = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid black;
  padding: 5px;
`;

export const TotalPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 200px;
  width: 100%;
  margin-left: auto;
  margin-top: 10px;
`;
