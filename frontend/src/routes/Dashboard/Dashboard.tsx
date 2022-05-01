import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import CustomersScreen from "../../screens/CustomersScreen";
import * as S from "./Dashboard.styled";

const Dashboard = () => {
  const [ref, isVisible, setIsVisibleTrue] = useOutsideAlerter();

  return (
    <>
      <Sidebar forwardedRef={ref} isOpen={isVisible} />
      <Navbar setSidebarIsOpen={setIsVisibleTrue} />
      <S.Main>
        <Routes>
          <Route path="/cutomers" element={<CustomersScreen />} />
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