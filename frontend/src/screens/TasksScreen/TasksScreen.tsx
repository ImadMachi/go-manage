import { useMemo, useState } from "react";
import { Modal, Pagination } from "@mantine/core";
import { Flex } from "../../common/components/Flex";
import { useElementWidth } from "../../hooks/useElementWidth";
import * as S from "./TasksScreen.styled";
import Button from "../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Task } from "../../models/taskModel";
import { useTasks } from "../../hooks/useTasks";
import TasksTable from "../../components/TasksTable/TasksTable";
import CreateTaskForm from "../../components/CreateTaskForm";
import EditTaskForm from "../../components/EditTaskForm";

const PAGE_SIZE = 10;

const TasksScreen = () => {
  const [activePage, setActivePage] = useState(1);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [taskToEdit, setTaskToEdit] = useState<Partial<Task>>({
    id: -1,
    dueDate: new Date().toISOString(),
    task: "",
    priority: "",
    status: "",
  });

  const [width, ref] = useElementWidth();

  const { loading, error, tasks } = useTasks();

  const displayedTasks = useMemo(() => {
    const firstPageIndex = (activePage - 1) * 10;
    const lastPageIndex = firstPageIndex + PAGE_SIZE;
    return (
      tasks
        // .filter((task) => task.warehouse.toLowerCase().includes(searchCriteria.toLowerCase()))
        .slice(firstPageIndex, lastPageIndex)
    );
  }, [activePage, tasks, searchCriteria]);

  const onPageChange = (page: number) => {
    setActivePage(page);
  };

  const editTaskHandler = (task: Task) => {
    setTaskToEdit(task);
    setIsEditModalOpen(true);
  };
  return (
    <S.Screen>
      <Modal
        opened={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title={<S.ModalTitle>Add Task</S.ModalTitle>}
        size={550}
        centered={true}
      >
        <CreateTaskForm onCloseModal={() => setIsCreateModalOpen(false)} />
      </Modal>

      <Modal
        opened={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title={<S.ModalTitle>Edit Task</S.ModalTitle>}
        size={550}
        centered={true}
      >
        {/* @ts-ignore */}
        <EditTaskForm onCloseModal={() => setIsEditModalOpen(false)} task={taskToEdit} />
      </Modal>
      <S.Title>Tasks</S.Title>
      <S.Container ref={ref}>
        <Flex justifyContent="space-between" alignItems="center">
          <S.Search placeholder="search.." onChange={(e) => setSearchCriteria(e.target.value)} />
          <Button onClick={() => setIsCreateModalOpen(true)}>
            <FontAwesomeIcon icon={faPlus} />
            Add Task
          </Button>
        </Flex>
        {!!tasks && <TasksTable items={displayedTasks} width={width} editTaskHandler={editTaskHandler} />}
        <Pagination page={activePage} total={tasks.length / 10 + 1} onChange={onPageChange} style={{ margin: "20px 0" }} />
      </S.Container>
    </S.Screen>
  );
};

export default TasksScreen;
