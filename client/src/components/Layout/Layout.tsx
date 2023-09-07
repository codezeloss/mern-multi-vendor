import Header from "./Header/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer.tsx";

function Layout() {
  return (
    <div className="h-full bg-gray-100">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
