import Detail from "./Detail.tsx";
import { logoutSeller } from "../../../features/seller/sellerSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ShopInfosCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { isSuccess, isError, seller } = sellerState;

  // ** RTK - Products state
  const productState = useSelector((state: any) => state.product);
  const { products } = productState;

  // ** Handle Seller-Shop logout
  const handleSellerLogout = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // @ts-ignore
    dispatch(logoutSeller());

    // ** Toast Notification
    if (isSuccess && seller === null) {
      toast.success("Logout successfully!", {});
      navigate("/");
    }
    if (isError) {
      toast.error("Something went wrong!! Please, try again.", {});
    }
  };

  return (
    <>
      <div className="bg-white rounded-md shadow-md min-w-[340px] h-full px-4 pb-4 pt-8 flex flex-col gap-11">
        <div>
          <img
            className="w-48 h-48 rounded-full mx-auto border-2 border-black bg-gray-200"
            src={seller?.avatar}
            alt=""
          />
          <h1 className="font-bold text-xl mt-2 text-center">
            {seller?.shopName}
          </h1>
        </div>

        <div className="flex flex-col gap-4 px-2">
          <Detail title={"Address"} description={seller?.address} />
          <Detail title={"Phone Number"} description={seller?.phoneNumber} />
          <Detail
            title={"Total Products"}
            description={products ? products.length : "NA"}
          />
          <Detail title={"Shop Ratings"} description={"4/5"} />
          <Detail
            title={"Joined"}
            description={new Date(seller?.createdAt).toLocaleDateString()}
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="w-full text-center text-sm py-2.5 px-6 text-white bg-black font-semibold rounded-md"
            type="button"
          >
            Edit Shop
          </button>
          <button
            className="w-full text-center text-sm py-2.5 px-6 text-white bg-red-500 font-semibold rounded-md"
            type="button"
            onClick={handleSellerLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
