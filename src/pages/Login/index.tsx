import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/api";
import { Container } from "./styles";

type FormData = {
  email: string;
  password: string;
};

export const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const { email, password } = data;
    fetch(`${baseUrl}/users?email=${email}&password=${password}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then(() => navigate("dashboard"));
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>E-mail</label>
          <input
            {...register("email", { required: "Email is required" })}
            placeholder="Seu E-mail"
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            placeholder="Senha"
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">Login</button>
      </form>
      <Link to="/register">Não tem uma conta? Cadastre-se</Link>
    </Container>
  );
};
