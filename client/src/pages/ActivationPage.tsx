import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateUserAccount } from "../features/user/userSlice.ts";

function ActivationPage() {
  const { url } = useParams();
  const dispatch = useDispatch();

  // ** RTK
  const userState = useSelector((state: any) => state.user);
  const { isError } = userState;

  // **
  useEffect(() => {
    if (url) {
      const activationToken = url?.split(",").join(".");
      // @ts-ignore
      dispatch(activateUserAccount(activationToken));
    }
  }, [url]);

  return (
    <div className={"h-screen flex items-center justify-center font-poppins"}>
      {isError ? (
        <h1 className="text-xl font-bold">Your Token is expired! 💀</h1>
      ) : (
        <h1 className="text-xl font-bold">
          Your account has been created successfully ✅
        </h1>
      )}
    </div>
  );
}

export default ActivationPage;
