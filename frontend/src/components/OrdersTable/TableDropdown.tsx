import { useState } from "react";
import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteOrder } from "../../features/thunks/ordersThunk";
import { Order } from "../../models/orderModel";
import * as S from "./TableDropdown.styled";
import { useAppDispatch } from "../../features/store";

interface TableDropdownProps {
  hiddenCols: Array<[string, string | number | boolean]>;
  isOpen: boolean;
  item: Order;
  editOrderHandler: (order: Order) => void;
  viewOrderDetailsHandler: (order: Order) => void;
}
const TableDropdown = ({ hiddenCols, isOpen, item, editOrderHandler, viewOrderDetailsHandler }: TableDropdownProps) => {
  const dispatch = useAppDispatch();
  const deleteItemHandler = () => {
    dispatch(deleteOrder(item.id));
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
          <FontAwesomeIcon icon={faEye} onClick={() => viewOrderDetailsHandler(item)} />
        </S.ViewIcon>{" "}
        <S.EditIcon>
          <FontAwesomeIcon icon={faEdit} onClick={() => editOrderHandler(item)} />
        </S.EditIcon>{" "}
        <S.TrashIcon onClick={() => deleteItemHandler()}>
          <FontAwesomeIcon icon={faTrash} />
        </S.TrashIcon>
      </S.DropdownItem>
    </S.Dropdown>
  );
};

export default TableDropdown;
