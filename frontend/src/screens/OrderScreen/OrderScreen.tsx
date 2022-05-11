import { useContext, useEffect, useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import Table from "../../common/components/Table/Table";
import { useOrders } from "../../hooks/useOrders";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./OrderScreen.styled";
import { ThemeContext } from "../..";
import { deleteOrder } from "../../features/thunks/orderThunk";
import CreateOrderForm from "../../components/CreateOrderForm";
import Button from "../../common/components/Button";

const headers = ["#", "Billing Name", "Date", "Total", "Payment Status", "Payment Method", "View Details", "Actions"];

const PAGE_SIZE = 10;

const OrderScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [width, ref] = useElementWidth();
  const { loading, error, orders } = useOrders();
  const displayedOrders = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return orders.slice(firstPageIndex, lastPageIndex);
  }, [activePage, orders]);
  const { theme, dispatch } = useContext(ThemeContext);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };
  return (
    <S.Screen>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={<S.ModalTitle>Add Order</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateOrderForm onCloseModal={() => setIsModalOpen(false)} />
      </Modal>
      <S.Title>Orders</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search>Search</S.Search>
          <Button onClick={() => setIsModalOpen(true)}>Add Order</Button>
        </Flex>
        {!!orders && <Table items={displayedOrders} headers={headers} width={width} deleteItem={deleteOrder} />}
        <Pagination page={activePage} total={orders.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default OrderScreen;
