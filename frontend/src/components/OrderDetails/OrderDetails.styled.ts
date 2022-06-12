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
  padding: 13px 5px;
`;

export const TotalPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 200px;
  width: 100%;
  margin-left: auto;
  margin-top: 10px;
`;

export const PdfsContainer = styled.div`
  margin-top: 8px;
  display: flex;
`;

const PdfIcon = styled.span`
  font-size: 1.8rem;
  margin-right: 0.3rem;
`;

export const Bill = styled(PdfIcon)`
  color: #e07706;
`;

export const OrderForm = styled(PdfIcon)`
  color: #05b1bd;
`;

export const Shipping = styled(PdfIcon)`
  color: #40519a;
`;

const Status = styled.span`
  display: inline-block;
  padding: 0.2rem 0.3rem;
  font-weight: bold;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.1;
    border-radius: 5px;
  }
  text-overflow: ellipsis;
`;

export const Gray = styled(Status)`
  color: #777;
  &::after {
    background-color: #777;
  }
`;

export const Orange = styled(Status)`
  color: #e07706;
  &::after {
    background-color: #e07706;
  }
`;

export const Green = styled(Status)`
  color: #05b1bd;
  &::after {
    background-color: #05b1bd;
  }
`;

export const Blue = styled(Status)`
  color: #3577f1;
  &::after {
    background-color: #3577f1;
  }
`;

export const Purple = styled(Status)`
  color: #40519a;
  &::after {
    background-color: #40519a;
  }
`;

export const OffBlue = styled(Status)`
  color: #299cdb;
  &::after {
    background-color: #299cdb;
  }
`;

export const ClientName = styled.h3`
  color: #333;
`;
