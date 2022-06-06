import { useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import { useOrders } from "../../hooks/useOrders";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./OrdersScreen.styled";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Order } from "../../models/orderModel";
import OrdersTable from "../../components/OrdersTable/OrdersTable";
import EditOrderForm from "../../components/EditOrderForm";
import CreateOrderForm from "../../components/CreateOrderForm";
import OrderDetails from "../../components/OrderDetails";

const PAGE_SIZE = 10;

const OrdersScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [orderToEdit, setOrderToEdit] = useState<Partial<Order>>({
    creationDate: new Date().toISOString(),
    paymentStatus: "",
    paymentMethod: "",
    paymentDate: new Date().toISOString(),
    deliveryStatus: "",
    deliveringDate: new Date().toISOString(),
    vat: 0,
  });
  const [orderToView, setOrderToView] = useState<Order>();

  const [width, ref] = useElementWidth();

  const { loading, error, orders } = useOrders();

  const displayedOrders = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return (
      orders
        // .filter((order) => order.toLowerCase().includes(searchCriteria.toLowerCase()))
        .slice(firstPageIndex, lastPageIndex)
    );
  }, [activePage, orders]);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editOrderHandler = (order: Order) => {
    setOrderToEdit(order);
    setIsEditModalOpen(true);
  };

  const viewOrderDetailsHandler = (order: Order) => {
    setOrderToView(order);
    setIsDetailsModalOpen(true);
  };

  return (
    <S.Screen>
      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Order</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateOrderForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={<S.ModalTitle>Edit Order</S.ModalTitle>}
        size={550}
        centered={true}
      >
        {/* @ts-ignore */}
        <EditOrderForm onCloseModal={() => setIsEditModalOpen(false)} order={orderToEdit} />
      </Modal>

      <Modal
        opened={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        title={<S.ModalTitle>Order Details</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <OrderDetails onCloseModal={() => setIsDetailsModalOpen(false)} order={orderToView} />
      </Modal>

      <S.Title>Orders</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search placeholder="search.." onChange={(e) => setSearchCriteria(e.target.value)} />
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Add Order
          </Button>
        </Flex>
        {!!orders && (
          <OrdersTable
            items={displayedOrders}
            width={width}
            editOrderHandler={editOrderHandler}
            viewOrderDetailsHandler={viewOrderDetailsHandler}
          />
        )}
        <Pagination page={activePage} total={orders.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default OrdersScreen;
