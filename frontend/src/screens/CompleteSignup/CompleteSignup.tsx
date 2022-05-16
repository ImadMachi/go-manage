import { Group, Loader, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { updateUserThunk } from "../../features/thunks/authThunk";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import * as S from "./CompleteSignup.styled";

const CompleteSignup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const [loadingButton, setLoadingButton] = useState(false);

  const form = useForm<{
    companyName: string;
    businessSector: string;
    size: number;
    address: string;
    fix: string;
    website: string;
    city: string;
    country: string;
    zip: number | undefined;
  }>({
    initialValues: {
      companyName: "",
      businessSector: "",
      size: 1,
      address: "",
      fix: "",
      website: "",
      city: "",
      country: "",
      zip: undefined,
    },
    validate: (values) => ({
      size: values.size < 1 ? "size should be greater than 0" : null,
      address: values.address.length < 2 ? "Too short" : null,
      city: values.city.length < 2 ? "Too short" : null,
      country: values.country.length < 2 ? "Too short" : null,
      zip: values.zip === undefined ? "zip is required" : values.zip.toString().length !== 5 ? "Invalid zip code" : null,
    }),
  });

  const { loading, error, userInfo } = useTypedSelector((state) => state.authUser);

  useEffect(() => {
    if (userInfo?.access_token && userInfo.user?.companyName) {
      navigate("/dashboard/home");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(updateUserThunk(values)).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Container>
      <S.Title>Welcome {userInfo.user?.firstName}</S.Title>
      <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
        <S.Grid>
          <TextInput label="CompanyName" placeholder="CompanyName" {...form.getInputProps("companyName")} />
          <TextInput label="BusinessSector" placeholder="BusinessSector" {...form.getInputProps("businessSector")} />
          <NumberInput label="Company Size" placeholder="Size" {...form.getInputProps("size")} />
          <TextInput label="Fix" placeholder="Fix" {...form.getInputProps("fix")} />
          <TextInput label="Address" placeholder="Address" {...form.getInputProps("address")} />
          <TextInput label="Country" placeholder="Country" {...form.getInputProps("country")} />
          <TextInput label="City" placeholder="City" {...form.getInputProps("city")} />
          <NumberInput label="Zip" placeholder="Zip" {...form.getInputProps("zip")} />
          <TextInput label="Website" placeholder="Website" {...form.getInputProps("website")} />
        </S.Grid>
        <Group position="right" mt="md">
          <Button type="submit">
            <Loader style={{ display: loading === "pending" ? "inline" : "none" }} size={15} color="white" />
            Submit
          </Button>
        </Group>
      </form>
    </S.Container>
  );
};

export default CompleteSignup;
