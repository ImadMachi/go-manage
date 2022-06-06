import { useForm } from "@mantine/form";
import { useAppDispatch } from "../../features/store";
import isEmail from "validator/es/lib/isEmail";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { editSupplier } from "../../features/thunks/supplierThunk";
import { Checkbox, Group, TextInput } from "@mantine/core";
import { Supplier } from "../../models/supplierModel";
import { useState } from "react";
import Button from "../../common/components/Button";

interface EditSupplierFormProps {
  onCloseModal: () => void;
  supplier: Supplier;
}
const EditSupplierForm = ({ onCloseModal, supplier }: EditSupplierFormProps) => {
  const [isChecked, setIsChecked] = useState(supplier.isActive);
  const dispatch = useAppDispatch();
  const form = useForm<{ name: string; email: string; address: string; phone: string; isActive: boolean }>({
    initialValues: {
      name: supplier.name,
      email: supplier.email,
      address: supplier.address,
      phone: supplier.phone,
      isActive: supplier.isActive,
    },
    validate: (values) => ({
      name: values.name.length < 2 ? "Too short name" : null,
      email: !isEmail(values.email) ? "Invalid email format" : null,
      address: values.address.length < 3 ? "Too short address" : null,
      phone: !isMobilePhone(values.phone) ? "Invalid phone number" : null,
    }),
  });
  const submitHandler = async (values: typeof form.values) => {
    form.validate();
    try {
      const result = await dispatch(editSupplier({ ...supplier, ...values })).unwrap();
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
      <Checkbox mt="md" label="Active" {...form.getInputProps("isActive", { type: "checkbox" })} />
      <Group position="right" mt="md">
        <Button type="submit">Edit Supplier</Button>
      </Group>
    </form>
  );
};

export default EditSupplierForm;
