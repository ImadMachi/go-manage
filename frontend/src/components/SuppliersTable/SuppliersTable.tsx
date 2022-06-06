import { Supplier } from "../../models/supplierModel";
import * as S from "./SuppliersTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  items: Array<Supplier>;
  width: number;
  editSupplierHandler: (supplier: Supplier) => void;
}
const SuppliersTable = ({ items, width, editSupplierHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} editSupplierHandler={editSupplierHandler} />
      ))}
    </S.Container>
  );
};

export default SuppliersTable;
