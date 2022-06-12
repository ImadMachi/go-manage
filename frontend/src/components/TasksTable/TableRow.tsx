import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Task } from "../../models/taskModel";
import TableDropdown from "./TableDropdown";
import * as S from "./TableRow.styled";

interface TableProps {
  item: Task;
  width: number;
  editTaskHandler: (task: Task) => void;
}
const TableRow = ({ item, width, editTaskHandler }: TableProps) => {
  const { customer, ...restItem } = item;
  const cols = Object.entries(restItem);
  cols.splice(1, 0, ["customer", customer.name]);
  //dummy warehouse

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

  const status = (value: any) => {
    switch (value) {
      case "pending":
        return <S.Gray>{value}</S.Gray>;
      case "inProgress":
        return <S.Orange>{value}</S.Orange>;
      case "completed":
        return <S.Green>{value}</S.Green>;
      default:
        return value;
    }
  };

  const priority = (value: any) => {
    switch (value) {
      case "medium":
        return <S.Gray>{value}</S.Gray>;
      case "high":
        return <S.Orange>{value}</S.Orange>;
      case "low":
        return <S.Green>{value}</S.Green>;
      default:
        return value;
    }
  };
  return (
    <S.Container>
      <S.Row colsLength={displayedCols.length}>
        <S.Col>
          <FontAwesomeIcon icon={faAngleRight} onClick={dropdownHandler} />
        </S.Col>
        {displayedCols.slice(1).map(([key, value], i) => (
          <S.Col key={i}>{key === "status" ? status(value) : key === "priority" ? priority(value) : value}</S.Col>
        ))}
      </S.Row>
      <TableDropdown isOpen={isDropdownOpen} hiddenCols={hiddenCols} item={item} editTaskHandler={editTaskHandler} />
    </S.Container>
  );
};

export default TableRow;
