import Header from "./Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer.tsx";

function Layout() {
  return (
    <div className={"h-full bg-gray-100"}>
      <Header />
      <div className={""}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
