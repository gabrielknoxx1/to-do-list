import { useEffect } from "react";
import { CardTask } from "../../components/CardTask";
import { TaskForm } from "../../components/TaskForm";
import { useApi } from "../../services/api";
import { useGetTodosQuery } from "../../services/api/@generated/schemas";
import {
  TaskListProps,
  useTaskListStore,
} from "../../services/stores/useTaskListStore";
import { Container, Content } from "./styles";

export const Board = () => {
  const [tasklistState, updateList] = useTaskListStore(
    ({ tasklist, updateList }) => [tasklist, updateList]
  );
  const { getTasks } = useApi();
  const { data, error, loading } = useGetTodosQuery();

  const moreTask = data?.todos?.map((content) => {
    return {
      id: content.id,
      title: content.title,
      description: content.description,
      status: content.completed ? "done" : "pending",
    };
  }) as TaskListProps[];

  useEffect(() => {
    getTasks();
  }, []);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Container>
      <TaskForm />
      <Content>
        {tasklistState?.map((task) => (
          <CardTask key={task.id} {...task} />
        ))}
        <p>Apenas visualização</p>
        {moreTask?.map((task) => (
          <CardTask key={task.id} {...task} />
        ))}
        {tasklistState?.length === 0 && moreTask?.length === 0 && (
          <strong>Sem Tarefas cadastradas</strong>
        )}
      </Content>
    </Container>
  );
};
