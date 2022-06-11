import { Group, NumberInput, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { updateUserThunk } from "../../features/thunks/authThunk";
import { User } from "../../models/userModel";
import * as S from "./UserChangePassword.styled";

interface UserChangePasswordProps {
  user: User;
}
const UserChangePassword = ({ user }: UserChangePasswordProps) => {
  const form = useForm<{}>({
    initialValues: {},
    validate: (values) => ({}),
  });

  const dispatch = useAppDispatch();
  const updateUserHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(updateUserThunk(values)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => updateUserHandler(values))}>
      <S.Row cols={2}>
        <PasswordInput
          mt={10}
          label={<S.InputLabel>Old Password</S.InputLabel>}
          placeholder="Old Password"
          // {...form.getInputProps("firstName")}
        />
      </S.Row>
      <S.Row cols={2}>
        <PasswordInput
          mt={10}
          label={<S.InputLabel>New Password</S.InputLabel>}
          placeholder="New Password"
          // {...form.getInputProps("firstName")}
        />
      </S.Row>
      <S.Row cols={2}>
        <PasswordInput
          mt={10}
          label={<S.InputLabel>Confirm Password</S.InputLabel>}
          placeholder="Confirm Password"
          // {...form.getInputProps("firstName")}
        />
      </S.Row>

      <S.Row cols={2}>
        <Group position="right" mt="md">
          <Button type="submit">UPDATE</Button>
        </Group>
      </S.Row>
    </form>
  );
};

export default UserChangePassword;
