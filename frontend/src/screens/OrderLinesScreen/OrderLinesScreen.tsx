import React from 'react'
import * as S from "./OrderLinesScreen.styled";

const OrderLinesScreen = () => {
  return (
<S.Wrapper>
  <S.Table>
    <S.Rowheader>
      <S.Cell>
        Product
      </S.Cell>
      <S.Cell>
        Product Name
      </S.Cell>
      <S.Cell>
        Price
      </S.Cell>
      </S.Rowheader>
      </S.Table>
</S.Wrapper>
);
}
export default OrderLinesScreen;
