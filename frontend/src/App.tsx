import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard/Dashboard";
import AboutScreen from "./screens/AboutScreen";
import CompleteSignup from "./screens/CompleteSignup";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route path="contact" element={<ContactScreen />} />
        <Route path="about" element={<AboutScreen />} />

          <Route index element={<HomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="signup">
            <Route index element={<SignupScreen />} />
            <Route path="complete-signup" element={<CompleteSignup />} />
          </Route>
          <Route path="dashboard/*" element={<Dashboard />} />
          {/* <Route path="*" /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
