import { Group, NumberInput, Select, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { createStock } from "../../features/thunks/stocksThunk";
import { useProducts } from "../../hooks/useProducts";
import * as S from "./CreateStockForm.styled";

interface CreateStockFormProps {
  onCloseModal: () => void;
}
const CreatestockForm = ({ onCloseModal }: CreateStockFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{ qty: number; creationDate: Date; productId: number }>({
    initialValues: { qty: 0, creationDate: new Date(), productId: -1 },
    validate: (values) => ({
      qty: values.qty < 0 ? "Quantity should be positive" : null,
    }),
  });
  const { loading, error, products } = useProducts();

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(
        createStock({ ...form.values, creationDate: form.values.creationDate.toISOString(), productId: +form.values.productId })
      ).unwrap();
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
          label="Product"
          placeholder="Product"
          searchable
          nothingFound="No Product"
          data={products.map((product) => ({ value: String(product.id), label: product.title }))}
          {...form.getInputProps("productId")}
          required
        />
        <NumberInput mb={15} label="Qty" placeholder="enter Qty" {...form.getInputProps("qty")} />
      </S.Grid>
      <S.Grid>
        <DatePicker mb={15} placeholder="Pick date" label="Creation Date" required {...form.getInputProps("creationDate")} />
      </S.Grid>

      <Group position="right" mt="md">
        <Button type="submit">Add stock</Button>
      </Group>
    </form>
  );
};

export default CreatestockForm;