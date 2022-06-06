import { Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import isEmail from "validator/es/lib/isEmail";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { createSupplier } from "../../features/thunks/supplierThunk";

interface CreateSupplierFormProps {
  onCloseModal: () => void;
}
const CreateSupplierForm = ({ onCloseModal }: CreateSupplierFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{ name: string; email: string; address: string; phone: string }>({
    initialValues: { name: "", email: "", address: "", phone: "" },
    validate: (values) => ({
      name: values.name.length < 2 ? "Too short name" : null,
      email: !isEmail(values.email) ? "Invalid email format" : null,
      address: values.address.length < 3 ? "Too short address" : null,
      phone: !isMobilePhone(values.phone) ? "Invalid phone number" : null,
    }),
  });
  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(createSupplier(form.values)).unwrap();
      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps("name")} />
      <TextInput label="Email" placeholder="Email" {...form.getInputProps("email")} />
      <TextInput label="Address" placeholder="Address" {...form.getInputProps("address")} />
      <TextInput label="Phone" placeholder="Phone" {...form.getInputProps("phone")} />

      <Group position="right" mt="md">
        <Button type="submit">Add Supplier</Button>
      </Group>
    </form>
  );
};

export default CreateSupplierForm;
