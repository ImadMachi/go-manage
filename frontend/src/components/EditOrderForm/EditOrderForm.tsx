import { useAppDispatch } from "../../features/store";
import { editOrder } from "../../features/thunks/ordersThunk";
import { Group, NumberInput, Select, TextInput } from "@mantine/core";
import { Order } from "../../models/orderModel";
import Button from "../../common/components/Button";
import * as S from "./EditOrderForm.styled";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";

interface EditOrderFormProps {
  onCloseModal: () => void;
  order: Order;
}
const EditOrderForm = ({ onCloseModal, order }: EditOrderFormProps) => {
  const dispatch = useAppDispatch();

  const form = useForm<{
    creationDate: Date;
    paymentStatus: string;
    paymentMethod: string;
    paymentDate: Date;
    deliveryStatus: string;
    deliveringDate: Date;
    vat: number;
  }>({
    initialValues: {
      creationDate: new Date(order.creationDate),
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      paymentDate: new Date(order.paymentDate),
      deliveryStatus: order.deliveryStatus,
      deliveringDate: new Date(order.deliveringDate),
      vat: 0,
    },
    validate: (values) => ({
      vat: values.vat < 0 ? "Invalid VAT" : null,
    }),
  });

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(
        editOrder({
          ...order,
          ...form.values,
          creationDate: form.values.creationDate.toISOString(),
          paymentDate: form.values.paymentDate.toISOString(),
          deliveringDate: form.values.deliveringDate.toISOString(),
        })
      ).unwrap();
      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <S.Grid>
        <NumberInput mb={15} label="VAT" placeholder="enter VAT percentage" {...form.getInputProps("vat")} />
        <DatePicker mb={15} placeholder="Pick date" label="Creation Date" required {...form.getInputProps("creationDate")} />
        <Select
          mb={15}
          label="Payment Status"
          placeholder="Pick an option"
          nothingFound="No options"
          data={[
            { value: "Refunded", label: "refunded" },
            { value: "Approved", label: "approved" },
            { value: "Pending", label: "pending" },
          ]}
          {...form.getInputProps("paymentStatus")}
          required
        />
        <DatePicker mb={15} placeholder="Pick date" label="Payment Date" required {...form.getInputProps("paymentDate")} />
        <Select
          mb={15}
          label="Payment Method"
          placeholder="payment method"
          data={[
            { value: "visa", label: "VISA" },
            { value: "mastercard", label: "MASTERCARD" },
            { value: "paypal", label: "PAYPAL" },
          ]}
          required
          {...form.getInputProps("paymentMethod")}
        />
        <Select
          mb={15}
          label="Delivery Status"
          placeholder="Pick an option"
          nothingFound="No options"
          data={[
            { value: "Delivered", label: "delivered" },
            { value: "Cancelled", label: "cancelled" },
            { value: "InProgress", label: "inProgress" },
            { value: "Pending", label: "pending" },
            { value: "Returns", label: "returns" },
            { value: "PickUps", label: "pickUps" },
          ]}
          {...form.getInputProps("deliveryStatus")}
          required
        />
        <DatePicker mb={15} placeholder="Pick date" label="Delivering Date" required {...form.getInputProps("deliveringDate")} />

        <Group position="right" mt="md">
          <Button type="submit">Edit Order</Button>
        </Group>
      </S.Grid>
    </form>
  );
};

export default EditOrderForm;
