import * as S from "./Table.styled";
import { Customer } from "../../../models/customerModel";
import TableRow from "./TableRow";
import { Order } from "../../../models/orderModel";

interface TableProps<T> {
  items: Array<T>;
  width: number;
  headers: Array<any>;
  deleteItem: Function;
}
const Table = <T extends Customer|Order>({ items, width, headers, deleteItem }: TableProps<T>) => {
  return (
    <S.Container>
      <TableRow item={headers} width={width} isTHeader={true} deleteItem={deleteItem} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} deleteItem={deleteItem} />
      ))}
    </S.Container>
  );
};

export default Table;
