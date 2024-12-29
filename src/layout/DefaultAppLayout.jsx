import { Outlet } from "react-router";

import AppNavbar from "../components/AppNavbar";

export default function DefaultAppLayout() {
  return (
    <>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2025 My App</p>
      </footer>
    </>
  );
}
