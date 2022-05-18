import { useForm } from "@mantine/form";
import { useAppDispatch } from "../../features/store";
import { editStock } from "../../features/thunks/stockThunk";
import { Group, NumberInput, TextInput } from "@mantine/core";
import { Stock } from "../../models/stockModel";
import Button from "../../common/components/Button";

interface EditStockFormProps {
  onCloseModal: () => void;
  stock: Stock;
}
const EditStockForm = ({ onCloseModal, stock }: EditStockFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{ qty: number; creationDate: string; warehouse: string }>({
    initialValues: { qty: stock.qty, creationDate: stock.creationDate, warehouse: stock.warehouse },
    validate: (values) => ({
      qty: values.qty < 0 ? "Quantity should be positive" : null,
    }),
  });
  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(editStock({ ...stock, ...values })).unwrap();
      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <NumberInput label="Qty" placeholder="Qty" {...form.getInputProps("qty")} />
      <TextInput label="Name" placeholder="Name" {...form.getInputProps("warehouse")} />

      <Group position="right" mt="md">
        <Button type="submit">Edit stock</Button>
      </Group>
    </form>
  );
};

export default EditStockForm;
