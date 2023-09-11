import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader.tsx";
import DashboardSideBar from "./DashboardSideBar.tsx";

export default function DashboardLayout() {
  return (
    <>
      <div className="w-full h-screen bg-gray-100 overflow-y-hidden">
        <DashboardHeader />

        <div className="w-full h-full flex">
          <DashboardSideBar />

          <main className="w-full h-full px-6 py-6 overflow-y-scroll">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
