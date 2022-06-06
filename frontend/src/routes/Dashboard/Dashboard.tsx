import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ProductDetail from "../../screens/ProductDetailsScreen";
import Sidebar from "../../components/Sidebar";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import CustomersScreen from "../../screens/CustomersScreen";
import ProductScreen from "../../screens/ProductScreen";
import ServiceScreen from "../../screens/ServiceScreen";
import OrdersScreen from "../../screens/OrdersScreen";
import * as S from "./Dashboard.styled";
import StocksScreen from "../../screens/StocksScreen";
import TasksScreen from "../../screens/TasksScreen";
import Analytic from "../../screens/Analytic";
import QuotesScreen from "../../screens/QuotesScreen";

const Dashboard = () => {
  const [ref, isVisible, setIsVisibleTrue] = useOutsideAlerter();

  return (
    <>
      <Sidebar forwardedRef={ref} isOpen={isVisible} />
      <Navbar setSidebarIsOpen={setIsVisibleTrue} />
      <S.Main>
        <Routes>
          <Route path="/customers" element={<CustomersScreen />} />
          <Route path="/analytic" element={<Analytic />} />
          <Route path="/quotes" element={<QuotesScreen />} />

          <Route path="/products" element={<ProductScreen />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/stocks" element={<StocksScreen />} />
          <Route path="/services" element={<ServiceScreen />} />
          <Route path="/orders" element={<OrdersScreen />} />
          <Route path="/tasks" element={<TasksScreen />} />

          {/* <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        </Routes>
      </S.Main>
    </>
  );
};

export default Dashboard;
