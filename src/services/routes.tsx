import { createBrowserRouter } from "react-router-dom";
import { Board as Dashboard } from "../pages/Board";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
