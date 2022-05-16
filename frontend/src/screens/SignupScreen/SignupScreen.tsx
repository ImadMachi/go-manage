import { Group, Loader, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/es/lib/isEmail";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { signupThunk } from "../../features/thunks/authThunk";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import * as S from "./SignupScreen.styled";

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
const Signup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const form = useForm<{ firstName: string; lastName: string; phone: string; email: string; password: string; confirmPassword: string }>({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => ({
      firstName: values.firstName.length < 2 ? "Too short" : null,
      lastName: values.lastName.length < 2 ? "Too short" : null,
      phone: !isMobilePhone(values.phone) ? "Invalid phone number" : null,
      email: !isEmail(values.email) ? "Invalid email format" : null,
      password: !values.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        ? "8 characters min, must contains at least one capital letter, one digit and one special character [!@#$%^&*]"
        : null,
      confirmPassword: values.password !== values.confirmPassword ? "password doesn't match" : null,
    }),
  });

  const { loading, error, userInfo } = useTypedSelector((state) => state.authUser);

  useEffect(() => {
    if (userInfo?.access_token) {
      navigate("/signup/complete-signup");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(signupThunk(values)).unwrap();
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
        <S.Title>Sign Up</S.Title>
        <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
          <S.InputContainer>
            <TextInput label="FirstName" placeholder="FirstName" {...form.getInputProps("firstName")} />
            <TextInput label="LastName" placeholder="LatsName" {...form.getInputProps("lastName")} />
          </S.InputContainer>
          <TextInput label="Email" placeholder="Email" {...form.getInputProps("email")} />
          <TextInput label="Phone" placeholder="Phone" {...form.getInputProps("phone")} />
          <PasswordInput label="Password" placeholder="Password" {...form.getInputProps("password")} />
          <PasswordInput label="Confirm Password" placeholder="Confirm Password" {...form.getInputProps("confirmPassword")} />
          <Group position="right" mt="md">
            <Button type="submit">
              <Loader style={{ display: loading === "pending" ? "inline" : "none" }} size={15} color="white" />
              Signup
            </Button>
          </Group>
        </form>
      </S.FormContainer>
    </S.Container>
  );
};

export default Signup;
