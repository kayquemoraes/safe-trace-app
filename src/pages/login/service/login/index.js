import axios from "axios";
import { toast } from "react-toastify";

export const loginService = async (payload) => {
  const { data } = await axios.get(
    `http://localhost:3000/login?username=${payload.username}&password=${payload.password}`
  );

  if (data.length > 0) {
    sessionStorage.setItem("login", JSON.stringify(payload));

    toast("Login Realizado com Sucesso", {
      type: "success",
    });

    return true;
  }

  toast("Login e Senha Inválido", {
    type: "error",
  });

  return false;
};
