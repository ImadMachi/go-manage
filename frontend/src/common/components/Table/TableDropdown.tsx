import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as S from "./TableDropdown.styled";

interface TableDropdownProps<T> {
  hiddenCols: Array<any>;
  isOpen: boolean;
  itemId: number;
  deleteItemAction: Function;
  editItemHandler: Function;
  item: T;
}
const TableDropdown = <T extends Object>({
  hiddenCols,
  isOpen,
  itemId,
  deleteItemAction,
  item,
  editItemHandler,
}: TableDropdownProps<T>) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const deleteItemHandler = () => {
    dispatch(deleteItemAction(itemId));
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
          <FontAwesomeIcon icon={faEdit} onClick={() => editItemHandler(item)} />
        </S.EditIcon>{" "}
        <S.TrashIcon onClick={() => deleteItemHandler()}>
          <FontAwesomeIcon icon={faTrash} />
        </S.TrashIcon>
      </S.DropdownItem>
    </S.Dropdown>
  );
};

export default TableDropdown;
