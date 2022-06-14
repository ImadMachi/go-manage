import { Group, NumberInput, Select } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useState } from "react";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { editQuote } from "../../features/thunks/quotesThunk";
import { Quote } from "../../models/quoteModel";
import * as S from "./EditQuoteForm.styled";

interface CreateQuoteFormProps {
  onCloseModal: () => void;
  quote: Quote;
}
const EditQuoteForm = ({ onCloseModal, quote }: CreateQuoteFormProps) => {
  const [selectedProducts, setSelectedProducts] = useState<Array<{ id: number; qty: number }>>([]);
  const dispatch = useAppDispatch();

  const form = useForm<{
    creationDate: Date;
    vat: number;
  }>({
    initialValues: { creationDate: new Date(quote.creationDate), vat: quote.vat },
    validate: (values) => ({
      vat: values.vat < 0 ? "Invalid VAT" : null,
    }),
  });

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(editQuote({ ...quote, ...values, creationDate: values.creationDate.toISOString() })).unwrap();
      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <S.Grid>
        <DatePicker mb={15} placeholder="Pick date" label="Creation Date" required {...form.getInputProps("creationDate")} />
        <NumberInput mb={15} label="VAT" placeholder="enter VAT percentage" {...form.getInputProps("vat")} />
      </S.Grid>

      <Group position="right" mt="md">
        <Button type="submit">Add Quote</Button>
      </Group>
    </form>
  );
};

export default EditQuoteForm;
