import { useContext, useEffect, useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import Table from "../../common/components/Table/Table";
import { useCustomers } from "../../hooks/useCustomers";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./CustomerScreen.styled";
import { ThemeContext } from "../..";
import { deleteCustomer, editCustomer } from "../../features/thunks/customerThunk";
import CreateCustomerForm from "../../components/CreateCustomerForm";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Customer } from "../../models/customerModel";
import EditCustomerForm from "../../components/EditCustomerForm";

const headers = ["#", "Customer", "Email", "Address", "Phone", "Status", "Total Spent", "Orders", "Joining Date", "Actions"];

const PAGE_SIZE = 10;

const CustomerScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [customerToEdit, setcustomerToEdit] = useState<Customer>({
    id: -1,
    name: "",
    email: "",
    address: "",
    phone: "",
    isActive: true,
    totalSpent: -1,
    orders: -1,
    creationDate: "",
  });

  const [width, ref] = useElementWidth();

  const { loading, error, customers } = useCustomers();

  const displayedCustomers = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return customers
      .filter((customer) => customer.name.toLowerCase().includes(searchCriteria.toLowerCase()))
      .slice(firstPageIndex, lastPageIndex);
  }, [activePage, customers, searchCriteria]);

  const { theme, dispatch } = useContext(ThemeContext);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editItemHandler = (item: Customer) => {
    setcustomerToEdit(item);
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
        {!!customers && (
          <Table
            items={displayedCustomers}
            headers={headers}
            width={width}
            deleteItemAction={deleteCustomer}
            editItemHandler={editItemHandler}
          />
        )}
        <Pagination page={activePage} total={customers.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default CustomerScreen;
