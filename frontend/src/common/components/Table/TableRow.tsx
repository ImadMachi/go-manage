import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "@mantine/core";
import { useEffect, useState } from "react";
import TableDropdown from "./TableDropdown";
import * as S from "./TableRow.styled";

interface TableProps<T> {
  item: T;
  width: number;
  isTHeader?: boolean;
  deleteItem: Function;
}
const TableRow = <T extends Object>({ item, width, isTHeader, deleteItem }: TableProps<T>) => {
  const cols = Object.entries(item);
  const [displayedCols, setDisplayedCols] = useState<Array<Array<keyof T>>>([]);
  const [hiddenCols, setHiddenCols] = useState<Array<Array<keyof T>>>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
          <S.Col key={i}>
            {typeof col === "boolean" ? col ? <S.IsActive>Active</S.IsActive> : <S.IsBlocked>Blocked</S.IsBlocked> : col}
          </S.Col>
        ))}
      </S.Row>
      <TableDropdown isOpen={isDropdownOpen} hiddenCols={hiddenCols} itemId={cols[0][1]} deleteItem={deleteItem} />
    </S.Container>
  );
};

export default TableRow;
