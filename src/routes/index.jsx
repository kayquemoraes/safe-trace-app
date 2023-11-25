import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { LoginPage } from "../pages/login";
import { HomeLoginPage } from "../pages/home_login";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home_login",
    element: <HomeLoginPage />,
  },
]);
