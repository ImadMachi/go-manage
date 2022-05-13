import { Order } from "../../models/orderModel";
import * as S from "./OrdersTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  items: Array<Order>;
  width: number;
  editOrderHandler: (order: Order) => void;
}
const OrdersTable = ({ items, width, editOrderHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} editOrderHandler={editOrderHandler} />
      ))}
    </S.Container>
  );
};

export default OrdersTable;
