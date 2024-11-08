import { v4 as uuid } from "uuid";
import { baseUrl } from "../../services/api";
import { Container } from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    const payload = {
      id: uuid(),
      ...data,
    };
    fetch(`${baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    navigate("/");
  };

  return (
    <Container>
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome</label>
          <input
            {...register("name", { required: "Nome is required" })}
            placeholder="Seu Nome"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Seu Email"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            {...register("password", { required: "Senha is required" })}
            placeholder="Sua Senha"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Registrar</button>
      </form>
    </Container>
  );
};
