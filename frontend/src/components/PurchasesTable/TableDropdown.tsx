import { useState } from "react";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./TableDropdown.styled";
import { useAppDispatch } from "../../features/store";
import { Purchase } from "../../models/purchaseModel";
import { deletePurchase } from "../../features/thunks/purchaseThunk";

interface TableDropdownProps {
  hiddenCols: Array<[string, string | number | boolean]>;
  isOpen: boolean;
  item: Purchase;
  editPurchaseHandler: (order: Purchase) => void;
  viewPurchaseDetailsHandler: (order: Purchase) => void;
}
const TableDropdown = ({ hiddenCols, isOpen, item, editPurchaseHandler, viewPurchaseDetailsHandler }: TableDropdownProps) => {
  const dispatch = useAppDispatch();
  const deleteItemHandler = () => {
    dispatch(deletePurchase(item.id));
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
        <S.ViewIcon>
          <FontAwesomeIcon icon={faEye} onClick={() => viewPurchaseDetailsHandler(item)} />
        </S.ViewIcon>{" "}
        <S.EditIcon>
          <FontAwesomeIcon icon={faEdit} onClick={() => editPurchaseHandler(item)} />
        </S.EditIcon>{" "}
        <S.TrashIcon onClick={() => deleteItemHandler()}>
          <FontAwesomeIcon icon={faTrash} />
        </S.TrashIcon>
      </S.DropdownItem>
    </S.Dropdown>
  );
};

export default TableDropdown;