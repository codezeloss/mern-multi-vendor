import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiGift, FiShoppingBag } from "react-icons/fi";
import { TbDiscount2 } from "react-icons/tb";
import { RiDiscussLine } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";

export default function DashboardHeader() {
  // ** RTK - seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  return (
    <header className="w-full bg-black text-white py-4 px-6 flex items-center justify-between shadow-md">
      <div></div>

      <div className="flex items-center gap-4">
        <Link to={"/seller/dashboard/messages"}>
          <FiGift color={""} size={21} />
        </Link>
        <Link to={"/seller/dashboard/coupons"}>
          <TbDiscount2 color={""} size={21} />
        </Link>{" "}
        <Link to={"/seller/dashboard/products"}>
          <FiShoppingBag color={""} size={21} />
        </Link>{" "}
        <Link to={"/seller/dashboard/orders"}>
          <MdAttachMoney color={""} size={21} />
        </Link>
        <Link to={"/seller/dashboard/messages"}>
          <RiDiscussLine color={""} size={21} />
        </Link>
        <Link to={`/seller/shop/${seller?._id}`}>
          <img
            className="text-sm rounded-full p-2 w-[38px] h-[38px] bg-white"
            src={""}
            alt=""
          />
        </Link>
      </div>
    </header>
  );
}
