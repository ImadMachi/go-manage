import { Task } from "../../models/taskModel";
import * as S from "./TasksTable.styled";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
  items: Array<Task>;
  width: number;
  editTaskHandler: (task: Task) => void;
}
const TasksTable = ({ items, width, editTaskHandler }: TableProps) => {
  return (
    <S.Container>
      <TableHeader width={width} />
      {items.map((item) => (
        <TableRow item={item} width={width} key={item.id} editTaskHandler={editTaskHandler} />
      ))}
    </S.Container>
  );
};

export default TasksTable;
