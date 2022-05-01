import * as S from "./Table.styled";
import { Customer } from "../../../models/customerModel";
import TableRow from "./TableRow";

interface TableProps<T> {
  items: Array<T>;
  width: number;
  headers: Array<any>;
}
const Table = <T extends Customer>({ items, width, headers }: TableProps<T>) => {
  return (
    <S.Container>
      <TableRow item={headers} width={width} isTHeader={true} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} />
      ))}
    </S.Container>
  );
};

export default Table;
