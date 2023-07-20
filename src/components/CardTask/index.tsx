import {
  TaskListProps,
  useTaskListStore,
} from "../../services/stores/useTaskListStore";
import { ButtonIcon } from "../ButtonIcon";
import { Container } from "./styles";

export const CardTask = ({ description, id, status, title }: TaskListProps) => {
  const { deleteTask, completeTask, selectTask } = useTaskListStore(
    (state) => state
  );

  return (
    <Container status={status}>
      <header>
        <ButtonIcon
          variant="status"
          title="Concluir"
          action={() => completeTask(id)}
        />
        <ButtonIcon
          variant="update"
          title="Altere informações na task selecionada"
          action={() =>
            selectTask({
              id,
              description,
              title,
              status,
            })
          }
        />
        <ButtonIcon
          variant="delete"
          title="Delete a task selecionada"
          action={() => deleteTask(id)}
        />
      </header>
      <section>
        <strong>{title}</strong>
        <p>{description}</p>
      </section>
    </Container>
  );
};
