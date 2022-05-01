import { Flex } from "../../common/components/Flex";
import Table from "../../common/components/Table/Table";
import { useCustomers } from "../../hooks/useCustomers";
import { useElementWidth } from "../../hooks/useElementWidth";
import { Customer } from "../../models/customerModel";
import * as S from "./CustomerScreen.styled";

const CustomerScreen = () => {
  const [width, ref] = useElementWidth();
  const headers = ["#", "Customer", "Email", "Address", "Phone", "Status", "Total Spent", "Orders", "Joining Date", "Actions"];
  const { loading, error, customers } = useCustomers();
  return (
    <S.Screen>
      <S.Title>Customers</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search>Search</S.Search>
          <S.AddCustomer>Add Customer</S.AddCustomer>
        </Flex>
        {customers && <Table items={customers} headers={headers} width={width} />}
        {error}
      </S.Container>
      {/* <TableRow item={customers[1]} width={width} /> */}
    </S.Screen>
  );
};

export default CustomerScreen;
