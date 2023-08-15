import { Link } from "react-router-dom";

interface Props {
  paymentMethod: string;
  setPaymentMethod: any;
}

function CodPayment({ paymentMethod, setPaymentMethod }: Props) {
  return (
    <>
      <div className="bg-white p-4 w-fit rounded-md">
        <div
          className="flex items-center gap-2 rounded-full cursor-pointer"
          onClick={() => setPaymentMethod("cod")}
        >
          <input
            type="checkbox"
            name=""
            id=""
            checked={paymentMethod === "cod"}
          />
          <h2 className="font-bold">Cash on Delivery</h2>
        </div>

        {paymentMethod === "cod" && (
          <Link
            to={"/checkout/payment"}
            className="w-fit font-medium py-2.5 px-11 bg-black text-white rounded-md mt-4 text-sm hover:bg-gray-500 hover:text-white"
          >
            Confirm
          </Link>
        )}
      </div>
    </>
  );
}

export default CodPayment;
