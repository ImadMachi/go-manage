import { useForm } from "@mantine/form";
import { useAppDispatch } from "../../features/store";
import { editOrder } from "../../features/thunks/orderThunk";
import { Group, TextInput } from "@mantine/core";
import { Order } from "../../models/orderModel";
import Button from "../../common/components/Button";

interface EditOrderFormProps {
  onCloseModal: () => void;
  order: Order;
}
const EditOrderForm = ({ onCloseModal, order }: EditOrderFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{
    date: number;
    billingName: string;
    total: number;
    paymentStatus: string;
    paymentMethod: string;
  }>({
    initialValues: {
      date: -1,
      billingName: "",
      total: -1,
      paymentStatus: "",
      paymentMethod: "",
    },
    validate: (values) => ({
      name: values.billingName.length < 2 ? "Too short name" : null,
    }),
  });
  const submitHandler = async (values: typeof form.values) => {
    form.validate();
    try {
      const result = await dispatch(editOrder({ ...order, ...values })).unwrap();
      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      {/* <TextInput label="Name" placeholder="Name" {...form.getInputProps("name")} />
      <TextInput label="Email" placeholder="Email" {...form.getInputProps("email")} />
      <TextInput label="Address" placeholder="Address" {...form.getInputProps("address")} />
      <TextInput label="Phone" placeholder="Phone" {...form.getInputProps("phone")} /> */}
      <Group position="right" mt="md">
        <Button type="submit">Edit Order</Button>
      </Group>
    </form>
  );
};

export default EditOrderForm;
