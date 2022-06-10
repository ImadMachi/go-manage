import { Order } from "../../models/orderModel";
import * as S from "./OrderDetails.styled";

interface OrderDetailsProps {
  onCloseModal: () => void;
  order: Order | undefined;
}

const OrderDetails = ({ order, onCloseModal }: OrderDetailsProps) => {
  if (!order) {
    return <>{onCloseModal()}</>;
  }
  const subTotal = order.orderLines.reduce((acc, curr) => acc + curr.qty * curr.product.price, 0);
  return (
    <div>
      <h3>
        <i>{order.customer.name}</i>
      </h3>
      <S.Grid cols={4}>
        <span>
          <b>Payment: </b>
        </span>
        <span>{order.paymentStatus}</span>
        <span>{order.paymentDate}</span>
        <span>{order.paymentMethod}</span>
      </S.Grid>
      <S.Grid cols={4}>
        <span>
          <b>Delivery: </b>
        </span>
        <span>{order.deliveryStatus}</span>
        <span>{order.deliveringDate}</span>
      </S.Grid>

      <S.TableRow cols={3}>
        <b>Product</b>
        <b>Price</b>
        <b>Qty</b>
      </S.TableRow>
      {order.orderLines.map((orderLine) => (
        <S.TableRow cols={3}>
          <span>{orderLine.product.title}</span>
          <span>${orderLine.product.price}</span>
          <span>{orderLine.qty}</span>
        </S.TableRow>
      ))}
      <S.TotalPrice>
        <b>SubTotal:</b>
        <span>${subTotal}</span>
        <b>VAT(%{order.vat}):</b>
        <span>${subTotal * (order.vat / 100)}</span>
        <b>Total:</b>
        <span>${subTotal + subTotal * (order.vat / 100)}</span>
      </S.TotalPrice>
    </div>
  );
};

export default OrderDetails;
