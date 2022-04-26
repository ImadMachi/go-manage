import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
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
