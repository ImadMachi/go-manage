import { Quote } from "../../models/quoteModel";
import * as S from "./QuotesTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  items: Array<Quote>;
  width: number;
  editQuoteHandler: (quote: Quote) => void;
}
const QuotesTable = ({ items, width, editQuoteHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow
          item={item}
          width={width}
          key={item.id}
          editQuoteHandler={editQuoteHandler}
        />
      ))}
    </S.Container>
  );
};

export default QuotesTable;
