import CustomInput from "../CustomInput.tsx";

function ShippingBilling() {
  return (
    <>
      <div className="bg-white p-4 w-[400px] rounded-md">
        <div className="border-b-[1px] border-gray-200 mb-2">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-700">Subtotal:</p>
            <p className="font-bold">$2610.00</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-700">Shipping:</p>
            <p className="font-bold">-</p>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-700">Discount:</p>
            <p className="font-bold">-</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div />
          <p className="font-bold">$2610.00</p>
        </div>

        <div>
          <CustomInput
            label={""}
            type={"text"}
            value={""}
            handleInput={() => {}}
            placeholder={"Coupon code"}
          />
          <button
            type="button"
            className="w-full font-medium p-2 border-2 border-gray-500 bg-white text-gray-500 rounded-md mt-2 text-sm hover:bg-gray-500 hover:text-white"
          >
            Apply code
          </button>
        </div>
      </div>
    </>
  );
}

export default ShippingBilling;
