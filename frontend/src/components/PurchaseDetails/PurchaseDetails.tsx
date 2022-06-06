import Button from "../../common/components/Button";
import { Purchase } from "../../models/purchaseModel";
import * as S from "./PurchaseDetails.styled";

interface PurchaseDetailsProps {
  onCloseModal: () => void;
  purchase: Purchase | undefined;
}

const PurchaseDetails = ({ purchase, onCloseModal }: PurchaseDetailsProps) => {
  if (!purchase) {
    return <>{onCloseModal()}</>;
  }
  const subTotal = purchase.purchaseLines.reduce((acc, curr) => acc + curr.qty * curr.product.price, 0);
  return (
    <div>
      <h3>
        <i>{purchase.supplier.name}</i>
      </h3>
     <h4>
       <i>{purchase.creationDate}</i>
     </h4>

      <S.TableRow cols={3}>
        <b>Product</b>
        <b>Price</b>
        <b>Qty</b>
      </S.TableRow>
      {purchase.purchaseLines.map((purchaseLine) => (
        <S.TableRow cols={3}>
          <span>{purchaseLine.product.title}</span>
          <span>${purchaseLine.product.price}</span>
          <span>{purchaseLine.qty}</span>
        </S.TableRow>
      ))}
      <S.TotalPrice>
        <b>SubTotal:</b>
        <span>${subTotal}</span>
        {/* <b>VAT(%{purchase.vat}):</b>
        <span>${subTotal }</span>
        <b>Total:</b>
        <span>${subTotal}</span> */}
      </S.TotalPrice>
    </div>
  );
};

export default PurchaseDetails;