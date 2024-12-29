import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <section>
      <h1>This is auth layout...</h1>
      <main>
        <Outlet />
      </main>
    </section>
  );
}
