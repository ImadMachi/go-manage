import { faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Order } from "../../models/orderModel";
import * as S from "./OrderDetails.styled";

interface OrderDetailsProps {
  onCloseModal: () => void;
  order: Order | undefined;
}

const OrderDetails = ({ order, onCloseModal }: OrderDetailsProps) => {
  const accessToken = useTypedSelector((state) => state.authUser.userInfo.access_token);
  if (!order) {
    return <>{onCloseModal()}</>;
  }

  const printBillHandler = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      await axios.get(`/bills/orderId/${order.id}`, config);
    } catch (e) {
      console.log(e);
    }
  };

  const printOrderFormHandler = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      await axios.get(`/order-forms/orderId/${order.id}`, config);
    } catch (e) {
      console.log(e);
    }
  };

  const printShippingHandler = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    try {
      await axios.get(`/shippings/orderId/${order.id}`, config);
    } catch (e) {
      console.log(e);
    }
  };
  const subTotal = order.orderLines.reduce((acc, curr) => acc + curr.qty * curr.product.price, 0);

  const paymentStatus = (value: any) => {
    switch (value) {
      case "pending":
        return <S.Gray>{value}</S.Gray>;
      case "refunded":
        return <S.Orange>{value}</S.Orange>;
      case "approved":
        return <S.Green>{value}</S.Green>;
      default:
        return value;
    }
  };
  const paymentMethod = (value: any) => {
    switch (value) {
      case "visa":
        return (
          <>
            <FontAwesomeIcon icon={faCcVisa} /> {value}
          </>
        );
      case "mastercard":
        return (
          <>
            <FontAwesomeIcon icon={faCcMastercard} /> {value}
          </>
        );
      case "paypal":
        return (
          <>
            <FontAwesomeIcon icon={faCcPaypal} /> {value}
          </>
        );
      default:
        return value;
    }
  };
  const deliveryStatus = (value: any) => {
    switch (value) {
      case "pending":
        return <S.Gray>{value}</S.Gray>;
      case "cancelled":
        return <S.Orange>{value}</S.Orange>;
      case "delivered":
        return <S.Green>{value}</S.Green>;
      case "inProgress":
        return <S.Blue>{value}</S.Blue>;
      case "returns":
        return <S.Purple>{value}</S.Purple>;
      case "pickups":
        return <S.OffBlue>{value}</S.OffBlue>;
      default:
        return value;
    }
  };
  return (
    <div>
      <S.ClientName>
        <i>{order.customer.name}</i>
      </S.ClientName>
      <S.Grid cols={4}>
        <span>
          <b>Payment: </b>
        </span>
        <span>{paymentStatus(order.paymentStatus)}</span>
        <span>{order.paymentDate}</span>
        <span>{paymentMethod(order.paymentMethod)}</span>
      </S.Grid>
      <S.Grid cols={4}>
        <span>
          <b>Delivery: </b>
        </span>
        <span>{deliveryStatus(order.deliveryStatus)}</span>
        <span>{order.deliveringDate}</span>
      </S.Grid>

      <S.TableRow cols={3}>
        <b>Product</b>
        <b>Price</b>
        <b>Qty</b>
      </S.TableRow>
      {order.orderLines.map((orderLine) => (
        <S.TableRow cols={3} key={orderLine.id}>
          <span>
            <S.Green>{orderLine.product.title}</S.Green>
          </span>
          <span>
            <S.Orange>${orderLine.product.price}</S.Orange>
          </span>
          <span>
            <S.Purple>{orderLine.qty}</S.Purple>
          </span>
        </S.TableRow>
      ))}
      <S.TotalPrice>
        <b>SubTotal:</b>
        <span>${subTotal}</span>
        <b>VAT(%{order.vat}):</b>
        <span>${subTotal * (order.vat / 100)}</span>
        <b>Total:</b>
        <span>${subTotal + subTotal * (order.vat / 100)}</span>
        <S.PdfsContainer>
          <S.Bill title="Print Bill">
            <FontAwesomeIcon icon={faFilePdf} onClick={printBillHandler} />
          </S.Bill>
          <S.OrderForm title="Print Order Form">
            <FontAwesomeIcon icon={faFilePdf} onClick={printOrderFormHandler} />
          </S.OrderForm>
          <S.Shipping title="Print Shipping">
            <FontAwesomeIcon icon={faFilePdf} onClick={printShippingHandler} />
          </S.Shipping>
        </S.PdfsContainer>
      </S.TotalPrice>
    </div>
  );
};

export default OrderDetails;
