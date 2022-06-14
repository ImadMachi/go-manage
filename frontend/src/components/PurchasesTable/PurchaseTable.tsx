import { Purchase } from "../../models/purchaseModel";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import * as S from "./PurchaseTable.Styled";

interface TableProps {
  items: Array<Purchase>;
  width: number;
  editPurchaseHandler: (purchase: Purchase) => void;
}
const PurchasesTable = ({ items, width, editPurchaseHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} editPurchaseHandler={editPurchaseHandler} />
      ))}
    </S.Container>
  );
};

export default PurchasesTable;
