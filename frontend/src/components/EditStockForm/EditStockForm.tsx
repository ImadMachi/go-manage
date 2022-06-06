import { useForm } from "@mantine/form";
import { useAppDispatch } from "../../features/store";
import { editStock } from "../../features/thunks/stocksThunk";
import { Group, NumberInput, TextInput } from "@mantine/core";
import { Stock } from "../../models/stockModel";
import Button from "../../common/components/Button";
import * as S from "./EditStockForm.styled";
import { DatePicker } from "@mantine/dates";

interface EditStockFormProps {
  onCloseModal: () => void;
  stock: Stock;
}
const EditStockForm = ({ onCloseModal, stock }: EditStockFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{ qty: number; creationDate: Date }>({
    initialValues: { qty: stock.qty, creationDate: new Date(stock.creationDate) },
    validate: (values) => ({
      qty: values.qty < 0 ? "Quantity should be positive" : null,
    }),
  });
  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(editStock({ ...stock, ...values, creationDate: values.creationDate.toISOString() })).unwrap();
      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <S.Grid>
        <NumberInput mb={15} label="Qty" placeholder="enter Qty" {...form.getInputProps("qty")} />
        <DatePicker mb={15} placeholder="Pick date" label="Creation Date" {...form.getInputProps("creationDate")} />
      </S.Grid>

      <Group position="right" mt="md">
        <Button type="submit">Edit stock</Button>
      </Group>
    </form>
  );
};

export default EditStockForm;
