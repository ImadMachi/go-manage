import { Flex } from "../../common/components/Flex";
import Table from "../../common/components/Table/Table";
import { useElementWidth } from "../../hooks/useElementWidth";
import { Customer } from "../../models/customerModel";
import * as S from "./CustomerScreen.styled";

const customers: Array<Customer> = [
  {
    id: 1,
    name: "Ahmed tawfiq",
    email: "ahmed10@gmail.com",
    address: "marrakesh Issil 14",
    phone: "0654875321",
    isActive: true,
    totalSpent: 5200,
    orders: 3,
    creationDate: "14 oct 2018",
  },
  {
    id: 2,
    name: "Salim othman",
    email: "salim15@gmail.com",
    address: "Agadir Talbrjt 14",
    phone: "0655875871",
    isActive: true,
    totalSpent: 100,
    orders: 1,
    creationDate: "18 oct 2018",
  },
];

const CustomerScreen = () => {
  const [width, ref] = useElementWidth();
  const headers = ["#", "Customer", "Email", "Address", "Phone", "Status", "Total Spent", "Orders", "Joining Date", "Actions"];
  return (
    <S.Screen>
      <S.Title>Customers</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search>Search</S.Search>
          <S.AddCustomer>Add Customer</S.AddCustomer>
        </Flex>
        <Table items={customers} headers={headers} width={width} />
      </S.Container>
      {/* <TableRow item={customers[1]} width={width} /> */}
    </S.Screen>
  );
};

export default CustomerScreen;
