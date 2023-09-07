import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { activateSellerShop } from "../../features/seller/sellerSlice.ts";

function SellerActivationPage() {
  const { url } = useParams();
  const dispatch = useDispatch();

  // ** RTK - seller State
  const sellerState = useSelector((state: any) => state.seller);
  const { isError } = sellerState;

  // **
  useEffect(() => {
    if (url) {
      const activationToken = url?.split(",").join(".");
      // @ts-ignore
      dispatch(activateSellerShop(activationToken));
    }
  }, [url]);

  return (
    <>
      <main
        className={"h-screen flex items-center justify-center font-poppins"}
      >
        {isError ? (
          <h1 className="text-xl font-bold">Your Token is expired! 💀</h1>
        ) : (
          <h1 className="text-xl font-bold">
            Your shop has been created successfully ✅
          </h1>
        )}
      </main>
    </>
  );
}

export default SellerActivationPage;
