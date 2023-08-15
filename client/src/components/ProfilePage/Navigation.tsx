import NavigationLink from "./NavigationLink.tsx";
import { AiOutlineLineChart, AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { RiRefund2Line } from "react-icons/ri";
import { HiOutlineInboxIn } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";
import { LiaAddressCard } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import { useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const currentPath = location.pathname.split("/")[2];
  console.log(currentPath);

  return (
    <>
      <div className="bg-white py-4 px-6 w-[300px] rounded-md shadow-md flex flex-col gap-2">
        <NavigationLink
          link={"/profile"}
          icon={<AiOutlineUser />}
          title={"Profile"}
          current={currentPath === undefined}
        />
        <NavigationLink
          link={"/profile/orders"}
          icon={<FiShoppingBag />}
          title={"Orders"}
          current={currentPath === "orders"}
        />
        <NavigationLink
          link={"/profile/refunds"}
          icon={<RiRefund2Line />}
          title={"Refunds"}
          current={currentPath === "refunds"}
        />
        <NavigationLink
          link={"/profile/inbox"}
          icon={<HiOutlineInboxIn />}
          title={"Inbox"}
          current={currentPath === "inbox"}
        />
        <NavigationLink
          link={"/profile/track-orders"}
          icon={<AiOutlineLineChart />}
          title={"Track Orders"}
          current={currentPath === "track-orders"}
        />
        <NavigationLink
          link={"/profile/payment"}
          icon={<MdOutlinePayment />}
          title={"Payment Methods"}
          current={currentPath === "payment"}
        />
        <NavigationLink
          link={"/profile/address"}
          icon={<LiaAddressCard />}
          title={"Address"}
          current={currentPath === "address"}
        />
        <NavigationLink
          link={"/profile/logout"}
          icon={<BiLogOut />}
          title={"Log out"}
          current={currentPath === "logout"}
        />
      </div>
    </>
  );
}

export default Navigation;
