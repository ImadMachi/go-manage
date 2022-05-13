import { Customer } from "../../models/customerModel";
import * as S from "./CustomersTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  items: Array<Customer>;
  width: number;
  editCustomerHandler: (customer: Customer) => void;
}
const CustomersTable = ({ items, width, editCustomerHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} editCustomerHandler={editCustomerHandler} />
      ))}
    </S.Container>
  );
};

export default CustomersTable;
