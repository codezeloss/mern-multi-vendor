import { MdOutlineDeleteSweep } from "react-icons/md";

function PaymentItem() {
  return (
    <div className="bg-white p-4 flex items-center justify-between border-[1px] border-gray-200 rounded-md">
      <div className="flex items-center gap-2">
        <img
          src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
          alt="Payment method"
        />
        <p className="font-medium text-sm">husein ait</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="font-medium text-sm">1234 **** **** ****</p>
        <div />
        <p className="font-medium text-sm">08/2023</p>
        <div />
      </div>

      <div>
        <MdOutlineDeleteSweep
          className="font-medium text-xl text-red-500 cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default PaymentItem;
