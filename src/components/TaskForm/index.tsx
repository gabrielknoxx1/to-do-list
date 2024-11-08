import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import Logo from "../../assets/Logo.svg";
import { useTaskListStore } from "../../services/stores/useTaskListStore";
import { Container } from "./styles";

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
    const selectedTaskLength = Object.keys(selectedTask).length;

    if (selectedTaskLength === 0) {
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
        <img src={Logo} alt="Logo" />
        <input
          {...register("name")}
          placeholder="Informe um titulo para tarefa"
        />

        <textarea
          {...register("description", { required: true })}
          placeholder="Descreva sua tarefa"
        />
        {errors.description && <span>Campo obrigatório</span>}
        <button type="submit">Salvar Tarefa</button>
      </form>
    </Container>
  );
};
