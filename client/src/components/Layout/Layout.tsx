import Header from "./Header.tsx";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className={"h-full bg-gray-100"}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
