import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login, NewUser, signup, UserCredentials } from "../../features/slices/authSlice";
import { useAppDispatch } from "../../features/store";
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
    dispatch(login(user));
    console.log(error);
    console.log(userInfo);
  };

  return (
    <>
      <button onClick={clickHandler}>login</button>
    </>
  );
};

export default Login;
