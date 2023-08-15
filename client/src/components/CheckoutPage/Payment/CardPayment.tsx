import CustomInput from "../../CustomInput.tsx";
import { Link } from "react-router-dom";

interface Props {
  paymentMethod: string;
  setPaymentMethod: any;
}

function CardPayment({ paymentMethod, setPaymentMethod }: Props) {
  return (
    <>
      <div className="bg-white p-4 w-fit rounded-md">
        <div
          className="flex items-center gap-2 rounded-full cursor-pointer"
          onClick={() => setPaymentMethod("card")}
        >
          <input
            type="checkbox"
            name=""
            id=""
            checked={paymentMethod === "card"}
          />
          <h2 className="font-bold">Pay with Debit/Credit card</h2>
        </div>

        {paymentMethod === "card" && (
          <>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex flex-col gap-2.5">
                <CustomInput
                  label={"Card Number"}
                  type={"text"}
                  value={""}
                  handleInput={() => {}}
                />
                <CustomInput
                  label={"Name on Card"}
                  type={"text"}
                  value={""}
                  handleInput={() => {}}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <CustomInput
                  label={"Expiration date"}
                  type={"text"}
                  value={""}
                  handleInput={() => {}}
                />
                <CustomInput
                  label={"Billing Address"}
                  type={"text"}
                  value={""}
                  handleInput={() => {}}
                />
              </div>
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

export default CardPayment;
