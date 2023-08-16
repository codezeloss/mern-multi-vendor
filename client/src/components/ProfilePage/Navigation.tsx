import NavigationLink from "./NavigationLink.tsx";
import { AiOutlineLineChart, AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { RiRefund2Line } from "react-icons/ri";
import { HiOutlineInboxIn } from "react-icons/hi";
import { MdOutlinePayment } from "react-icons/md";
import { LiaAddressCard } from "react-icons/lia";
import { BiLogOut } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/user/userSlice.ts";
import { useEffect } from "react";

function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ** Get the current path
  const currentPath = location.pathname.split("/")[2];

  // ** RTK - User state
  const { isAuthenticated } = useSelector((state: any) => state.user);

  // ** Handle User Logout
  const handleLogout = () => {
    // @ts-ignore
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated]);

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
        <div onClick={handleLogout}>
          <NavigationLink
            link={"/profile"}
            icon={<BiLogOut />}
            title={"Log out"}
            current={currentPath === "logout"}
          />
        </div>
      </div>
    </>
  );
}

export default Navigation;
