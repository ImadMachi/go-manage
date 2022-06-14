import { useEffect, useState } from "react";
import * as S from "./TableHeader.styled";

const headers = ["#", "supplier", "Purchase Date", "Total"];

interface TableProps {
  width: number;
}
const TableHeader = ({ width }: TableProps) => {
  const [displayedCols, setDisplayedCols] = useState<string[]>([]);

  useEffect(() => {
    if (width < 360) {
      setDisplayedCols(headers.slice(0, 2));
    } else if (width < 560) {
      setDisplayedCols(headers.slice(0, 3));
    } else if (width < 760) {
      setDisplayedCols(headers.slice(0, 4));
    } else if (width < 960) {
      setDisplayedCols(headers.slice(0, 5));
    } else if (width < 1160) {
      setDisplayedCols(headers.slice(0, 6));
    } else if (width < 1360) {
      setDisplayedCols(headers.slice(0, 7));
    } else {
      setDisplayedCols(headers.slice(0, 8));
    }
  }, [width]);

  return (
    <S.Container>
      <S.Row colsLength={displayedCols.length}>
        {displayedCols.map((header) => (
          <S.Col key={header}>{header}</S.Col>
        ))}
      </S.Row>
    </S.Container>
  );
};

export default TableHeader;
