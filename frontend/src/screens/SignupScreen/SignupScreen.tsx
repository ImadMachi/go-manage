import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NewUser, signup } from "../../features/slices/authSlice";
import { useAppDispatch } from "../../features/store";
import { useSelector } from "../../hooks/useTypedSelector";

const user: NewUser = {
  firstName: "admin",
  lastName: "test",
  email: "imad4@test.com",
  password: "blabla",
  field: "test",
  size: 2,
  socialReason: "test",
  address: "test",
  city: "agadir",
  country: "Morocco",
  fix: "+21255458789",
  phone: "0603444",
};
const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userInfo);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    // if (userInfo?.access_token) {
    //   navigate("/login");
    // }
  }, [navigate, userInfo]);

  const clickHandler = () => {
    dispatch(signup(user));
  };

  return (
    <>
      <button onClick={clickHandler}>login</button>
    </>
  );
};

export default Signup;
