import { TaskForm } from "../../components/TaskForm";
import { CardTask } from "../../components/CardTask";
import { useTaskListStore } from "../../services/stores/useTaskListStore";
import { Container, Content } from "./styles";
import { useEffect } from "react";
import { useApi } from "../../services/api";
export const Board = () => {
  const [tasklistState] = useTaskListStore(({ tasklist }) => [tasklist]);
  const { getTasks } = useApi();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container>
      <TaskForm />
      <Content>
        {tasklistState.map((task) => (
          <CardTask key={task.id} {...task} />
        ))}
        {tasklistState?.length === 0 && (
          <strong>Sem Tarefas cadastradas</strong>
        )}
      </Content>
    </Container>
  );
};
