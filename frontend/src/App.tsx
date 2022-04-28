import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard/Dashboard";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
