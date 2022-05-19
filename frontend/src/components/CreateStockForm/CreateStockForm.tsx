import { Group, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { createStock } from "../../features/thunks/stockThunk";
import * as S from "./CreateStockForm.styled";

interface CreateStockFormProps {
  onCloseModal: () => void;
}
const CreatestockForm = ({ onCloseModal }: CreateStockFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{ qty: number; creationDate: string; warehouse: string }>({
    initialValues: { qty: 0, creationDate: "", warehouse: "" },
    validate: (values) => ({
      qty: values.qty < 0 ? "Quantity should be positive" : null,
    }),
  });

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(createStock(form.values)).unwrap();
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
        <Button type="submit">Add stock</Button>
      </Group>
    </form>
  );
};

export default CreatestockForm;
