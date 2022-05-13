import * as S from "./Table.styled";
import { Customer } from "../../../models/customerModel";
import TableRow from "./TableRow";

interface TableProps<T> {
  items: Array<T>;
  width: number;
  headers: Array<any>;
  deleteItemAction: Function;
  editItemHandler: Function;
}
const Table = <T extends Customer>({ items, width, headers, deleteItemAction, editItemHandler }: TableProps<T>) => {
  return (
    <S.Container>
      <TableRow item={headers} width={width} isTHeader={true} deleteItemAction={deleteItemAction} editItemHandler={editItemHandler} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} deleteItemAction={deleteItemAction} editItemHandler={editItemHandler} />
      ))}
    </S.Container>
  );
};

export default Table;
