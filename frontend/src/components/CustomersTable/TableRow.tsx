import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Customer } from "../../models/customerModel";
import TableDropdown from "./TableDropdown";
import * as S from "./TableRow.styled";

interface TableProps {
  item: Customer;
  width: number;
  editCustomerHandler: (customer: Customer) => void;
}
const TableRow = ({ item, width, editCustomerHandler }: TableProps) => {
  const cols = Object.entries(item);
  const [displayedCols, setDisplayedCols] = useState<Array<[string, string | number | boolean]>>([]);
  const [hiddenCols, setHiddenCols] = useState<Array<[string, string | number | boolean]>>([]);
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
      <S.Row colsLength={displayedCols.length}>
        <S.Col>
          <FontAwesomeIcon icon={faAngleRight} onClick={dropdownHandler} />
        </S.Col>
        {displayedCols.slice(1).map(([_, col], i) => (
          <S.Col key={i}>
            {typeof col === "boolean" ? (col ? <S.IsActive>Active</S.IsActive> : <S.IsBlocked>Blocked</S.IsBlocked> ): col}
          </S.Col>
        ))}
      </S.Row>
      <TableDropdown isOpen={isDropdownOpen} hiddenCols={hiddenCols} item={item} editCustomerHandler={editCustomerHandler} />
    </S.Container>
  );
};

export default TableRow;
