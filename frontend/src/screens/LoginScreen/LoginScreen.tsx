import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../features/store";
import { loginThunk, UserCredentials } from "../../features/thunks/authThunk";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const user: UserCredentials = {
  email: "nouhailaskitina6@gmail.com",
  password: "test1234",
};
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, error, userInfo } = useTypedSelector((state) => state.authUser);

  useEffect(() => {
    // if (userInfo?.access_token) {
    //   navigate("/login");
    // }
  }, [navigate, userInfo]);

  const clickHandler = () => {
    dispatch(loginThunk(user));
  };

  return (
    <>
      <button onClick={clickHandler}>login</button>
    </>
  );
};

export default Login;
