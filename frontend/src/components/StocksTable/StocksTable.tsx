import { Stock } from "../../models/stockModel";
import * as S from "./StocksTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  items: Array<Stock>;
  width: number;
  editStockHandler: (stock: Stock) => void;
}
const StocksTable = ({ items, width, editStockHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} editStockHandler={editStockHandler} />
      ))}
    </S.Container>
  );
};

export default StocksTable;
