import { RouterProvider } from "react-router";

import useRouter from "./router";

export default function App() {
  const { router } = useRouter();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
