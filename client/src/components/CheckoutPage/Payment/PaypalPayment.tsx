import CustomInput from "../CustomInput.tsx";
import { Link } from "react-router-dom";

interface Props {
  paymentMethod: string;
  setPaymentMethod: any;
}

function PaypalPayment({ paymentMethod, setPaymentMethod }: Props) {
  return (
    <>
      <div className="bg-white p-4 w-fit rounded-md">
        <div
          className="flex items-center gap-2 rounded-full cursor-pointer"
          onClick={() => setPaymentMethod("paypal")}
        >
          <input
            type="checkbox"
            name=""
            id=""
            checked={paymentMethod === "paypal"}
          />
          <h2 className="font-bold">Pay with Paypal</h2>
        </div>

        {paymentMethod === "paypal" && (
          <>
            <div className="w-full mt-4">
              <CustomInput
                label={"Paypal email"}
                type={"email"}
                value={""}
                handleInput={() => {}}
              />
            </div>

            <Link
              to={"/checkout/payment"}
              className="w-fit font-medium py-2.5 px-11 bg-black text-white rounded-md mt-4 text-sm hover:bg-gray-500 hover:text-white"
            >
              Submit
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default PaypalPayment;
