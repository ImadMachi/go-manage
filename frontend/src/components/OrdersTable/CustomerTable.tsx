import { Customer } from "../../models/customerModel";
import * as S from "./CustomerTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  items: Array<Customer>;
  width: number;
  editCustomerHandler: (customer: Customer) => void;
}
const CustomerTable = ({ items, width, editCustomerHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} editCustomerHandler={editCustomerHandler} />
      ))}
    </S.Container>
  );
};

export default CustomerTable;
