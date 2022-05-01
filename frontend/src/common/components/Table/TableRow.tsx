import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import * as S from "./TableRow.styled";

interface TableProps<T> {
  item: T;
  width: number;
  isTHeader?: boolean;
}
const TableRow = <T extends Object>({ item, width, isTHeader }: TableProps<T>) => {
  const cols = Object.entries(item);
  const [displayedCols, setDisplayedCols] = useState<Array<Array<keyof T>>>([]);
  const [hiddenCols, setHiddenCols] = useState<Array<Array<keyof T>>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownHandler = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (width < 360) {
      setDisplayedCols(cols.slice(0, 2));
      setHiddenCols(cols.slice(2));
    } else if (width < 560) {
      setDisplayedCols(cols.slice(0, 3));
      setHiddenCols(cols.slice(3));
    } else if (width < 760) {
      setDisplayedCols(cols.slice(0, 4));
      setHiddenCols(cols.slice(4));
    } else if (width < 960) {
      setDisplayedCols(cols.slice(0, 5));
      setHiddenCols(cols.slice(5));
    } else if (width < 1160) {
      setDisplayedCols(cols.slice(0, 6));
      setHiddenCols(cols.slice(6));
    } else if (width < 1360) {
      setDisplayedCols(cols.slice(0, 7));
      setHiddenCols(cols.slice(7));
    } else {
      setDisplayedCols(cols.slice(0, 8));
      setHiddenCols(cols.slice(8));
    }
  }, [width]);

  return (
    <S.Container>
      <S.Row colsLength={displayedCols.length} isTHeader={isTHeader}>
        {isTHeader ? (
          <S.Col>#</S.Col>
        ) : (
          <S.Col>
            <FontAwesomeIcon icon={faAngleRight} onClick={dropdownHandler} />
          </S.Col>
        )}
        {displayedCols.slice(1).map(([_, col], i) => (
          <S.Col key={i}>{typeof col === "boolean" ? (col ? "Active" : "Blocked") : col}</S.Col>
        ))}
      </S.Row>
      <S.Dropdown isOpen={isOpen} maxHeight={`${hiddenCols.length * 2}rem`}>
        {hiddenCols.map(([key, col], i) => (
          <S.DropdownItem key={i}>
            {key}: {typeof col === "boolean" ? (col ? "Active" : "Blocked") : col}
          </S.DropdownItem>
        ))}
      </S.Dropdown>
    </S.Container>
  );
};

export default TableRow;
