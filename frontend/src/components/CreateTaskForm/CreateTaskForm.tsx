import { Group, NumberInput, Select, Textarea } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import Button from "../../common/components/Button";
import { useAppDispatch } from "../../features/store";
import { createTask } from "../../features/thunks/tasksThunk";
import { useCustomers } from "../../hooks/useCustomers";
import { useProducts } from "../../hooks/useProducts";
import * as S from "./CreateTaskForm.styled";

interface CreateTaskFormProps {
  onCloseModal: () => void;
}
const CreatetaskForm = ({ onCloseModal }: CreateTaskFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{ task: string; dueDate: Date; priority: string; customerId: string }>({
    initialValues: { task: "", dueDate: new Date(), priority: "medium", customerId: "" },
    validate: (values) => ({
      task: values.task.length < 5 ? "Too short" : null,
    }),
  });
  const { loading, error, customers } = useCustomers();

  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(
        createTask({ ...form.values, dueDate: values.dueDate.toISOString(), customerId: +values.customerId })
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
          label="Customer"
          placeholder="Customer"
          searchable
          nothingFound="No Customers"
          data={customers.map((customer) => ({ value: String(customer.id), label: customer.name }))}
          {...form.getInputProps("customerId")}
          required
        />
        <DatePicker mb={15} placeholder="Pick date" label="Due Date" required {...form.getInputProps("dueDate")} />
      </S.Grid>
      <Textarea mb={15} label="Task" placeholder="enter task.." {...form.getInputProps("task")} required />

      <S.Grid>
        <Select
          mb={15}
          label="Priority"
          placeholder="Priority"
          data={[
            { value: "high", label: "HIGH" },
            { value: "medium", label: "MEDIUM" },
            { value: "low", label: "LOW" },
          ]}
          {...form.getInputProps("priority")}
          required
        />
      </S.Grid>

      <Group position="right" mt="md">
        <Button type="submit">Add task</Button>
      </Group>
    </form>
  );
};

export default CreatetaskForm;
