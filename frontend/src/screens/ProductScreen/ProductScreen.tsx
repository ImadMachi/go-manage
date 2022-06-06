import { Modal } from "@mantine/core";
import { useState } from "react";
import Card from "../../components/card";
import CreateProductForm from "../../components/CreateProductForm";
import { useElementWidth } from "../../hooks/useElementWidth";
import { useProducts } from "../../hooks/useProducts";
import * as S from "./ProductScreen.styled";

const ProductScreen = () => {
  const { loading, error, products } = useProducts();
  const [width, ref] = useElementWidth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <S.Screen>
      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Product</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateProductForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal>
      <S.Header>
        <S.Title>Products</S.Title>
        <S.Button onClick={() => setIsCreateModalOpen(true)}>Add Product</S.Button>
      </S.Header>
      <S.Container ref={ref} width={width}>
        {products.map((product) => (
          <Card {...product} key={product.id} />
        ))}
      </S.Container>
    </S.Screen>
  );
};
export default ProductScreen;
