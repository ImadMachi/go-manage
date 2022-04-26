import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={<LandingPage />} /> */}
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
