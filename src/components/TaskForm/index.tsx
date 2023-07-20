import { useForm, SubmitHandler } from "react-hook-form";
import { Container } from "./styles";
import { useTaskListStore } from "../../services/stores/useTaskListStore";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";

type Inputs = {
  name: string;
  description: string;
};

export const TaskForm = () => {
  const [addTask, selectedTask, updateTask] = useTaskListStore(
    ({ addTask, selectedTask, updateTask }) => [
      addTask,
      selectedTask,
      updateTask,
    ]
  );

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ description, name }) => {
    if (selectedTask.id?.length === 0) {
      addTask({
        description,
        title: name,
        id: uuid(),
        status: "pending",
      });
    } else {
      updateTask({
        description,
        title: name,
        id: selectedTask.id,
        status: "pending",
      });
    }
    reset();
  };

  useEffect(() => {
    setValue("description", selectedTask.description);
    setValue("name", selectedTask.title);
  }, [selectedTask]);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Informe um titulo para tarefa"
        />

        <textarea
          {...register("description", { required: true })}
          placeholder="Descreva sua tarefa"
        />
        {errors.description && <span>This field is required</span>}
        <button type="submit">Salvar Tarefa</button>
      </form>
    </Container>
  );
};
