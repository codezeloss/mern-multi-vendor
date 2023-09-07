import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader.tsx";
import DashboardSideBar from "./DashboardSideBar.tsx";

export default function DashboardLayout() {
  return (
    <>
      <div className="w-full h-screen bg-gray-100 flex overflow-y-hidden">
        <DashboardSideBar />

        <div className="w-full h-full overflow-y-scroll">
          <DashboardHeader />
          <main className="h-full px-6 py-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
