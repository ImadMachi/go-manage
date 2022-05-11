import { useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import { useCustomers } from "../../hooks/useCustomers";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./OrdersScreen.styled";
import CreateCustomerForm from "../../components/CreateCustomerForm";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Order } from "../../models/orderModel";

const PAGE_SIZE = 10;

const OrdersScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [orderToEdit, setOrderToEdit] = useState<Order>({
    id: -1,
    date: -1,
    billingName: "",
    total: -1,
    paymentStatus: "",
    paymentMethod: "",
    customerId: -1,
  });

  const [width, ref] = useElementWidth();

  const { loading, error, orders } = useOrders();

  const displayedCustomers = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return customers
      .filter((customer) => customer.name.toLowerCase().includes(searchCriteria.toLowerCase()))
      .slice(firstPageIndex, lastPageIndex);
  }, [activePage, customers, searchCriteria]);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editCustomerHandler = (customer: Customer) => {
    setcustomerToEdit(customer);
    setIsEditModalOpen(true);
  };

  return (
    <S.Screen>
      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Customer</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateCustomerForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={<S.ModalTitle>Edit Customer</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <EditCustomerForm onCloseModal={() => setIsEditModalOpen(false)} customer={customerToEdit} />
      </Modal>
      <S.Title>Customers</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search placeholder="search.." onChange={(e) => setSearchCriteria(e.target.value)} />
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Add Customer
          </Button>
        </Flex>
        {!!customers && <CustomersTable items={displayedCustomers} width={width} editCustomerHandler={editCustomerHandler} />}
        <Pagination page={activePage} total={customers.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default OrdersScreen;
