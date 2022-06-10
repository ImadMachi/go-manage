import { Group, Loader, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { loginThunk } from "../../features/thunks/authThunk";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import * as S from "./LoginScreen.styled";

// const user: NewUser = {
// firstName: "Imad",
// lastName: "Machi",
// phone: string,
// email: string,
// password: string,

//   CompanyName: string,
//   businessSector: string,
//   website: string,
//   size: number,
//   address: string,
//   zip: number,
//   city: string,
//   country: string,
//   fix: string,
// };
const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<{ email: string; password: string }>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => ({
      Email: values.email.length < 2 ? "Too short" : null,

      password: !values.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        ? "8 characters min, must contains at least one capital letter, one digit and one special character [!@#$%^&*]"
        : null,
    }),
  });

  const { loading, error, userInfo } = useTypedSelector((state) => state.authUser);

  useEffect(() => {
    if (userInfo?.access_token) {
      navigate("/dashboard/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(loginThunk(values)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <S.ImageLayer>
        <S.Image src="/images/signup.webp" />
      </S.ImageLayer>

      <S.FormContainer>
        <S.Title>Login</S.Title>
        <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
          <TextInput label="Email" placeholder="Email" {...form.getInputProps("email")} />

          <PasswordInput label="Password" placeholder="Password" {...form.getInputProps("password")} />
          <Group position="right" mt="md">
            <Button type="submit">
              <Loader style={{ display: loading === "pending" ? "inline" : "none" }} size={15} color="white" />
              Login
            </Button>
          </Group>
          <S.Message>
            Not registered? <S.StyledLink to="/signup">Sign up</S.StyledLink>
          </S.Message>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
