import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Quote } from "../../models/quoteModel";
import TableDropdown from "./TableDropdown";
import * as S from "./TableRow.styled";

interface TableProps {
  item: Quote;
  width: number;
  editQuoteHandler: (quote: Quote) => void;
}
const TableRow = ({ item, width, editQuoteHandler }: TableProps) => {
  const total = item.quoteProducts.reduce((acc, curr) => acc + curr.qty * curr.product.price, 0);
  const cols: Array<[string, string | number | boolean]> = [
    ["#", ""],
    ["id", item.id],
    ["customer", item.customer.name],
    ["Creation date", item.creationDate],
    ["total", `$${total}`],
  ];
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
          <S.Icon isDropdownOpen={isDropdownOpen} onClick={dropdownHandler}>
            <FontAwesomeIcon icon={faAngleRight} />
          </S.Icon>
        </S.Col>
        {displayedCols.slice(1).map(([key, value], i) => (
          <S.Col key={i}>
            {key === "total" ? <S.Green>{value}</S.Green> : key === "Creation date" ? <S.Orange>{value}</S.Orange> : value}
          </S.Col>
        ))}
      </S.Row>
      <TableDropdown isOpen={isDropdownOpen} hiddenCols={hiddenCols} item={item} editQuoteHandler={editQuoteHandler} />
    </S.Container>
  );
};

export default TableRow;
