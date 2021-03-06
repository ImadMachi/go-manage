import { faEdit, faFilePdf, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteQuote, printQuote } from "../../features/thunks/quotesThunk";
import { Quote } from "../../models/quoteModel";
import * as S from "./TableDropdown.styled";
import { useAppDispatch } from "../../features/store";

interface TableDropdownProps {
  hiddenCols: Array<[string, string | number | boolean]>;
  isOpen: boolean;
  item: Quote;
  editQuoteHandler: (quote: Quote) => void;
}
const TableDropdown = ({ hiddenCols, isOpen, item, editQuoteHandler }: TableDropdownProps) => {
  const dispatch = useAppDispatch();

  const deleteItemHandler = () => {
    dispatch(deleteQuote(item.id));
  };

  const printQuoteHandler = async () => {
    await dispatch(printQuote(item.id));
  };

  return (
    <S.Dropdown isOpen={isOpen}>
      {hiddenCols.map(([key, col], i) => (
        <S.DropdownItem key={i}>
          {typeof col === "boolean" ? "Status" : key}:{" "}
          {typeof col === "boolean" ? col ? <S.IsActive>Active</S.IsActive> : <S.IsBlocked>Blocked</S.IsBlocked> : col}
        </S.DropdownItem>
      ))}
      <S.DropdownItem>
        Actions:{" "}
        <S.EditIcon>
          <FontAwesomeIcon icon={faEdit} onClick={() => editQuoteHandler(item)} />
        </S.EditIcon>{" "}
        <S.TrashIcon onClick={() => deleteItemHandler()}>
          <FontAwesomeIcon icon={faTrash} />
        </S.TrashIcon>{" "}
        <S.PrintIcon onClick={() => printQuoteHandler()}>
          <FontAwesomeIcon icon={faFilePdf} />
        </S.PrintIcon>
      </S.DropdownItem>
    </S.Dropdown>
  );
};

export default TableDropdown;
