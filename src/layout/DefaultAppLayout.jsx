import { Outlet } from "react-router";

export default function DefaultAppLayout() {
  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 My App</p>
      </footer>
    </div>
  );
}
