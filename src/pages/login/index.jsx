import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import { loginService } from "./service/login";
import '../../App.scss';

export function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (payload) => {
    try {
      const loginSuccess = await loginService(payload);

      if (loginSuccess) navigate("/home_login");
    } catch (error) {
      toast("Erro ao realizar o login", {
        type: "error",
      });
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Informe seu login de acesso</label>
        <div className="input-group">
          <input
            placeholder="Login"
            defaultValue=""
            {...register("username", { required: true })}
          />

          <input
            placeholder="Senha"
            {...register("password", { required: true })}
          />
          {(errors.password || errors.username) && (
            <span className="error">Preencha todos os campos</span>
          )}
        </div>
        <Button title="Entrar" color="#d86666" />
        <Button title="Voltar" color="gray" onClick={() => navigate("/")} />
      </form>
    </div>
  );
}
