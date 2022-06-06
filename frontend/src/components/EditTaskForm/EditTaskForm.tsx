import { useForm } from "@mantine/form";
import { useAppDispatch } from "../../features/store";
import { editTask } from "../../features/thunks/tasksThunk";
import { Group, NumberInput, Select, Textarea } from "@mantine/core";
import { Task } from "../../models/taskModel";
import Button from "../../common/components/Button";
import * as S from "./EditTaskForm.styled";
import { DatePicker } from "@mantine/dates";

interface EditTaskFormProps {
  onCloseModal: () => void;
  task: Task;
}
const EditTaskForm = ({ onCloseModal, task: taskItem }: EditTaskFormProps) => {
  const dispatch = useAppDispatch();
  const form = useForm<{ id: number; dueDate: Date; task: string; priority: string; status: string }>({
    initialValues: {
      id: taskItem.id,
      dueDate: new Date(taskItem.dueDate),
      task: taskItem.task,
      priority: taskItem.priority,
      status: taskItem.status,
    },
    validate: (values) => ({
      task: values.task.length < 5 ? "Too short" : null,
    }),
  });
  const submitHandler = async (values: typeof form.values) => {
    try {
      const result = await dispatch(editTask({ ...taskItem, ...values, dueDate: values.dueDate.toISOString() })).unwrap();
      onCloseModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={form.onSubmit((values) => submitHandler(values))}>
      <S.Grid>
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
        <Select
          mb={15}
          label="Status"
          placeholder="Status"
          data={[
            { value: "pending", label: "PENDING" },
            { value: "completed", label: "COMPLETED" },
            { value: "inProgress", label: "INPROGRESS" },
          ]}
          {...form.getInputProps("status")}
          required
        />
      </S.Grid>

      <Group position="right" mt="md">
        <Button type="submit">Edit task</Button>
      </Group>
    </form>
  );
};

export default EditTaskForm;
