import CreateCouponForm from "../../../components/seller/Dashboard/CouponsPage/CreateCouponForm.tsx";
import { useEffect, useState } from "react";
import CouponsTable from "../../../components/seller/Dashboard/CouponsPage/CouponsTable.tsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../features/seller/product/productSlice.ts";
import { getAllCoupons } from "../../../features/seller/coupon/couponSlice.ts";

export default function CouponsPage() {
  const dispatch = useDispatch();
  const [showCouponForm, setShowCouponForm] = useState(false);

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  // ** RTK - Products state
  const productState = useSelector((state: any) => state.product);
  const { products } = productState;

  // ** RTK - Products state
  const couponState = useSelector((state: any) => state.coupon);
  const { isLoading: couponsLoading, coupons } = couponState;

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllCoupons(seller?._id));
    // @ts-ignore
    dispatch(getAllProducts(seller?._id));
  }, []);

  return (
    <>
      {showCouponForm && (
        <div className="py-6 mb-44 h-full">
          <CreateCouponForm
            products={products}
            setShowCouponForm={setShowCouponForm}
          />
        </div>
      )}

      {!showCouponForm && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <div />
            <button
              type={"button"}
              className="text-center text-sm py-2.5 px-4 text-white bg-black font-semibold rounded-md"
              onClick={() => setShowCouponForm(!showCouponForm)}
            >
              New Coupon code
            </button>
          </div>

          {coupons && coupons.length > 0 && couponsLoading === false && (
            <CouponsTable data={coupons} />
          )}

          {couponsLoading === true && (
            <div
              className={
                "w-24 h-24 rounded-full animate-spin mx-auto mt-8 border-2 border-solid border-blue-500 border-t-transparent my-6"
              }
            />
          )}

          {coupons.length === 0 && couponsLoading === false && (
            <h1 className="font-bold text-xl text-center mt-11">
              No Coupons Found!
            </h1>
          )}
        </div>
      )}
    </>
  );
}
