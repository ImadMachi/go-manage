import { useAppDispatch } from "../../features/store";
import { editOrder } from "../../features/thunks/orderThunk";
import { Group, NumberInput, Select, TextInput } from "@mantine/core";
import { Order } from "../../models/orderModel";
import Button from "../../common/components/Button";
import { useEffect, useState } from "react";
import { useCustomers } from "../../hooks/useCustomers";
import { useProducts } from "../../hooks/useProducts";
import * as S from "./EditOrderForm.styled";
import { DatePicker } from "@mantine/dates";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "@mantine/form";

interface EditOrderFormProps {
  onCloseModal: () => void;
  order: Order;
}
const EditOrderForm = ({ onCloseModal, order }: EditOrderFormProps) => {
  const dispatch = useAppDispatch();

  const form = useForm<{
    creationDate: Date;
    paymentStatus: String;
    paymentMethod: String;
    paymentDate: Date;
    deliveryStatus: String;
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
      const result = await dispatch(editOrder({ ...form.values, creationDate: form.values.creationDate.toISOString() })).unwrap();

      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <S.Grid>
        <Select
          mb={15}
          label="Customer"
          placeholder="Customer"
          searchable
          nothingFound="No customers"
          data={customers.map((customer) => ({ value: String(customer.id), label: customer.name }))}
          required
          {...form.getInputProps("customerId")}
        />
        <DatePicker mb={15} placeholder="Pick date" label="Creation Date" required {...form.getInputProps("creationDate")} />
      </S.Grid>
      <Select
        mb={15}
        label="Product"
        placeholder="Product"
        searchable
        nothingFound="No Product"
        onChange={(value) =>
          value && selectedProducts.every((p) => p.id !== +value) && setSelectedProducts([...selectedProducts, { id: +value, qty: 1 }])
        }
        data={loadedProducts.map((product) => ({ value: String(product.id), label: `${product.title} ($${product.price})` }))}
        required
      />

      <S.Grid>
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
        <NumberInput mb={15} label="VAT" placeholder="enter VAT percentage" {...form.getInputProps("vat")} />
      </S.Grid>

      <Group position="right" mt="md">
        <Button type="submit">Add Order</Button>
      </Group>
    </form>
  );
};

export default EditOrderForm;
