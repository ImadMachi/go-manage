import { useAppDispatch } from "../../features/store";
import { editPurchase } from "../../features/thunks/purchaseThunk";
import { Group, NumberInput, Select, TextInput } from "@mantine/core";
import { Purchase } from "../../models/purchaseModel";
import Button from "../../common/components/Button";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import * as S from './EditPurchaseForm.styled'

interface EditPurchaseFormProps {
  onCloseModal: () => void;
  purchase: Purchase;
}
const EditPurchaseForm = ({ onCloseModal, purchase }: EditPurchaseFormProps) => {
  const dispatch = useAppDispatch();

  const form = useForm<{
    creationDate: Date;
    // paymentStatus: string;
    // paymentMethod: string;
    // paymentDate: Date;
    // deliveryStatus: string;
    // deliveringDate: Date;
    // vat: number;
  }>({
    initialValues: {
      creationDate: new Date(purchase.creationDate),
    //   paymentStatus: purchase.paymentStatus,
    //   paymentMethod: purchase.paymentMethod,
    //   paymentDate: new Date(purchase.paymentDate),
    //   deliveryStatus: purchase.deliveryStatus,
    //   deliveringDate: new Date(purchase.deliveringDate),
    //   vat: 0,
    },
    // validate: (values) => ({
    //   vat: values.vat < 0 ? "Invalid VAT" : null,
    // }),
  });

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(
        editPurchase({
          ...purchase,
          ...form.values,
          creationDate: form.values.creationDate.toISOString(),
        //   paymentDate: form.values.paymentDate.toISOString(),
        //   deliveringDate: form.values.deliveringDate.toISOString(),
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
{/*       
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
        />  */}
        {/* <DatePicker mb={15} placeholder="Pick date" label="Payment Date" required {...form.getInputProps("paymentDate")} />
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
        /> */}
        {/* <Select
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
        /> */}
        {/* <DatePicker mb={15} placeholder="Pick date" label="Delivering Date" required {...form.getInputProps("deliveringDate")} /> */}

        <Group position="right" mt="md">
          <Button type="submit">Add Purchase</Button>
        </Group>
      </S.Grid>
    </form>
  );
};

export default EditPurchaseForm;