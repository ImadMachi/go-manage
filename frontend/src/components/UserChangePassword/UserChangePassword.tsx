import { Group, NumberInput, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { changePasswordThunk, updateUserThunk } from "../../features/thunks/authThunk";
import { User } from "../../models/userModel";
import * as S from "./UserChangePassword.styled";

interface UserChangePasswordProps {
  user: User;
  setSideTitle: Function;
}
const UserChangePassword = ({ user, setSideTitle }: UserChangePasswordProps) => {
  const form = useForm<{
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
  }>({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validate: (values) => ({
      newPassword: !values.newPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
        ? "8 characters min, must contains at least one capital letter, one digit and one special character [!@#$%^&*]"
        : null,
      confirmPassword: values.newPassword !== values.confirmPassword ? "password doesn't match" : null,
    }),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const changePasswordHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(changePasswordThunk(values)).unwrap();
      setSideTitle(1);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => changePasswordHandler(values))}>
      <S.Row cols={2}>
        <PasswordInput
          mt={10}
          label={<S.InputLabel>Old Password</S.InputLabel>}
          placeholder="Old Password"
          {...form.getInputProps("oldPassword")}
        />
      </S.Row>
      <S.Row cols={2}>
        <PasswordInput
          mt={10}
          label={<S.InputLabel>New Password</S.InputLabel>}
          placeholder="New Password"
          {...form.getInputProps("newPassword")}
        />
      </S.Row>
      <S.Row cols={2}>
        <PasswordInput
          mt={10}
          label={<S.InputLabel>Confirm Password</S.InputLabel>}
          placeholder="Confirm Password"
          {...form.getInputProps("confirmPassword")}
        />
      </S.Row>

      <S.Row cols={2}>
        <Group position="right" mt="md">
          <Button type="submit">SAVE</Button>
        </Group>
      </S.Row>
    </form>
  );
};

export default UserChangePassword;
