import { Outlet } from "react-router";

import AppNavbar from "../components/AppNavbar";
import AppFooter from "../components/AppFooter";

export default function DefaultAppLayout() {
  return (
    <>
      <AppNavbar />
      <main>
        <Outlet />
      </main>
      <AppFooter />
    </>
  );
}
