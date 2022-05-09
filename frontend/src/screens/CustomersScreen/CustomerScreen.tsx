import { useContext, useEffect, useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import Table from "../../common/components/Table/Table";
import { useCustomers } from "../../hooks/useCustomers";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./CustomerScreen.styled";
import { ThemeContext } from "../..";
import { deleteCustomer } from "../../features/thunks/customerThunk";
import CreateCustomerForm from "../../components/CreateCustomerForm";
import Button from "../../common/components/Button";

const headers = ["#", "Customer", "Email", "Address", "Phone", "Status", "Total Spent", "Orders", "Joining Date", "Actions"];

const PAGE_SIZE = 10;

const CustomerScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [width, ref] = useElementWidth();
  const { loading, error, customers } = useCustomers();
  const displayedCustomers = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return customers.slice(firstPageIndex, lastPageIndex);
  }, [activePage, customers]);
  const { theme, dispatch } = useContext(ThemeContext);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };
  return (
    <S.Screen>
      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={<S.ModalTitle>Add Customer</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateCustomerForm onCloseModal={() => setIsModalOpen(false)} />
      </Modal>
      <S.Title>Customers</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search>Search</S.Search>
          <Button onClick={() => setIsModalOpen(true)}>Add Customer</Button>
        </Flex>
        {!!customers && <Table items={displayedCustomers} headers={headers} width={width} deleteItem={deleteCustomer} />}
        <Pagination page={activePage} total={customers.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default CustomerScreen;
