import { useState } from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteCustomer } from "../../features/thunks/customersThunk";
import { Customer } from "../../models/customerModel";
import * as S from "./TableDropdown.styled";
import { useAppDispatch } from "../../features/store";

interface TableDropdownProps {
  hiddenCols: Array<[string, string | number | boolean]>;
  isOpen: boolean;
  item: Customer;
  editCustomerHandler: (customer: Customer) => void;
}
const TableDropdown = ({ hiddenCols, isOpen, item, editCustomerHandler }: TableDropdownProps) => {
  const dispatch = useAppDispatch();

  const deleteItemHandler = () => {
    dispatch(deleteCustomer(item.id));
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
          <FontAwesomeIcon icon={faEdit} onClick={() => editCustomerHandler(item)} />
        </S.EditIcon>{" "}
        <S.TrashIcon onClick={() => deleteItemHandler()}>
          <FontAwesomeIcon icon={faTrash} />
        </S.TrashIcon>
      </S.DropdownItem>
    </S.Dropdown>
  );
};

export default TableDropdown;
