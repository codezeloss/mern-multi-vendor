import { useLocation } from "react-router-dom";
import DashboardSideBarLink from "./DashboardSideBarLink.tsx";
import { FiSettings, FiShoppingBag } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiAddToQueue, BiCalendarEvent } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";
import Logo from "../../Logo.tsx";

export default function DashboardSideBar() {
  const location = useLocation();

  // ** Get the current path
  const currentPath = location.pathname.split("/")[3];

  return (
    <nav className="w-[340px] h-full bg-black text-white py-4 px-6 shadow-r-md flex flex-col gap-2">
      <div className="mb-4">
        <Logo />
      </div>

      <DashboardSideBarLink
        link={"/seller/dashboard/"}
        current={currentPath === ""}
        icon={<LuLayoutDashboard />}
        title={"Dashboard"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/orders"}
        current={currentPath === "orders"}
        icon={<BsBoxSeam />}
        title={"All Orders"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/products"}
        current={currentPath === "products"}
        icon={<FiShoppingBag />}
        title={"All Products"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/new-product"}
        current={currentPath === "new-product"}
        icon={<BiAddToQueue />}
        title={"New Product"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/events"}
        current={currentPath === "events"}
        icon={<BiCalendarEvent />}
        title={"All Events"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/new-event"}
        current={currentPath === "new-event"}
        icon={<BiAddToQueue />}
        title={"New Event"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/withdraw"}
        current={currentPath === "withdraw"}
        icon={<MdOutlineAttachMoney />}
        title={"Withdraw"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/inbox"}
        current={currentPath === "inbox"}
        icon={<AiOutlineMessage />}
        title={"Shop Inbox"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/discounts"}
        current={currentPath === "discounts"}
        icon={<TbDiscount2 />}
        title={"Discounts"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/refunds"}
        current={currentPath === "refunds"}
        icon={<RiRefund2Line />}
        title={"Refunds"}
      />
      <DashboardSideBarLink
        link={"/seller/dashboard/settings"}
        current={currentPath === "settings"}
        icon={<FiSettings />}
        title={"Settings"}
      />
    </nav>
  );
}
