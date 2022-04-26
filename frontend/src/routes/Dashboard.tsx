import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useOutsideAlerter } from "../hooks/useOutsideAlerter";

const Dashboard = () => {
  const [ref, isVisible, setIsVisibleTrue] = useOutsideAlerter();

  return (
    <>
      <Sidebar forwardedRef={ref} isOpen={isVisible} />
      <Navbar setSidebarIsOpen={setIsVisibleTrue} />
      <main>
        <Routes>
          {/* <Route index element={<Home />} />
      <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} /> */}
          {/* </Route> */}
        </Routes>
      </main>
    </>
  );
};

export default Dashboard;