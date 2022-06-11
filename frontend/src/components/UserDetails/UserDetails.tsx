import { Group, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { updateUserThunk } from "../../features/thunks/authThunk";
import { User } from "../../models/userModel";
import * as S from "./UserDetails.styled";

interface UserDetailsProps {
  user: User;
}
const UserDetails = ({ user }: UserDetailsProps) => {
  const form = useForm<{
    firstName: string;
    lastName: string;
    size: number;
    address: string;
    city: string;
    country: string;
    fix: string;
    phone: string;
    businessSector: string;
    website: string;
    companyName: string;
    zip: number;
  }>({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      size: user.size,
      address: user.address,
      city: user.city,
      country: user.country,
      fix: user.fix,
      phone: user.phone,
      businessSector: user.businessSector,
      website: user.website,
      companyName: user.companyName,
      zip: user.zip,
    },
    validate: (values) => ({
      firstName: values.firstName.length < 2 ? "Too short" : null,
      lastName: values.lastName.length < 2 ? "Too short" : null,
      phone: !isMobilePhone(values.phone) ? "Invalid phone number" : null,
      size: values.size < 1 ? "size should be greater than 0" : null,
      address: values.address.length < 2 ? "Too short" : null,
      city: values.city.length < 2 ? "Too short" : null,
      country: values.country.length < 2 ? "Too short" : null,
      zip: values.zip === undefined ? "zip is required" : values.zip.toString().length !== 5 ? "Invalid zip code" : null,
    }),
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
      <S.Title>User Info</S.Title>
      <S.Row cols={3}>
        <TextInput mt={10} label={<S.InputLabel>First Name</S.InputLabel>} placeholder="First Name" {...form.getInputProps("firstName")} />
        <TextInput mt={10} label={<S.InputLabel>Last Name</S.InputLabel>} placeholder="Last Name" {...form.getInputProps("lastName")} />
        <TextInput mt={10} label={<S.InputLabel>Phone</S.InputLabel>} placeholder="Fix" {...form.getInputProps("phone")} />
      </S.Row>
      <S.Title>Company Info</S.Title>
      <S.Row cols={3}>
        <TextInput
          mt={10}
          label={<S.InputLabel>Company Name</S.InputLabel>}
          placeholder="Company Name"
          {...form.getInputProps("companyName")}
        />
        <TextInput
          mt={10}
          label={<S.InputLabel>business Sector</S.InputLabel>}
          placeholder="business Sector"
          {...form.getInputProps("businessSector")}
        />
        <TextInput mt={10} label={<S.InputLabel>Fix</S.InputLabel>} placeholder="Fix" {...form.getInputProps("fix")} />
      </S.Row>
      <S.Row cols={3}>
        <TextInput mt={10} label={<S.InputLabel>Country</S.InputLabel>} placeholder="Country" {...form.getInputProps("country")} />
        <TextInput mt={10} label={<S.InputLabel>City</S.InputLabel>} placeholder="City" {...form.getInputProps("city")} />
        <NumberInput mt={10} label={<S.InputLabel>zip</S.InputLabel>} placeholder="Zip" {...form.getInputProps("zip")} />
      </S.Row>
      <S.Row cols={3}>
        <TextInput mt={10} label={<S.InputLabel>Address</S.InputLabel>} placeholder="Address" {...form.getInputProps("address")} />
        <TextInput mt={10} label={<S.InputLabel>Website</S.InputLabel>} placeholder="Website" {...form.getInputProps("website")} />
        <NumberInput mt={10} label={<S.InputLabel>Size</S.InputLabel>} placeholder="Size" {...form.getInputProps("size")} />
      </S.Row>
      <Group position="right" mt="md">
        <Button type="submit">UPDATE PROFILE</Button>
      </Group>
    </form>
  );
};

export default UserDetails;
