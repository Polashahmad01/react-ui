import { createBrowserRouter } from "react-router";

import DefaultAppLayout from "./layout/DefaultAppLayout";
// import AuthLayout from "./layout/AuthLayout";
import ErrorPage from "./views/ErrorPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import ForgotPasswordPage from "./views/ForgotPasswordPage";

export default function useRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultAppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPasswordPage />,
        },
      ],
    },
  ]);

  return {
    router,
  };
}
