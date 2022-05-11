import { useForm } from "@mantine/form";
import { useAppDispatch } from "../../features/store";
import isEmail from "validator/es/lib/isEmail";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import { editCustomer } from "../../features/thunks/customerThunk";
import { Checkbox, Group, TextInput } from "@mantine/core";
import { Customer } from "../../models/customerModel";
import { useState } from "react";
import Button from "../../common/components/Button";

interface EditCustomerFormProps {
  onCloseModal: () => void;
  customer: Customer;
}
const EditCustomerForm = ({ onCloseModal, customer }: EditCustomerFormProps) => {
  const [isChecked, setIsChecked] = useState(customer.isActive);
  const dispatch = useAppDispatch();
  const form = useForm<{ name: string; email: string; address: string; phone: string; isActive: boolean }>({
    initialValues: {
      name: customer.name,
      email: customer.email,
      address: customer.address,
      phone: customer.phone,
      isActive: customer.isActive,
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
      const result = await dispatch(editCustomer({ ...customer, ...values })).unwrap();
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
        <Button type="submit">Edit Customer</Button>
      </Group>
    </form>
  );
};

export default EditCustomerForm;
