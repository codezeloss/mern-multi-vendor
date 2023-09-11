import CustomInput from "../../CustomInput.tsx";
import { SetStateAction, useState } from "react";

export default function CreateCouponForm({ setShowCouponForm }: any) {
  const [name, setName] = useState("");
  const [value, setValue] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [minAmount, setMinAmount] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);

  return (
    <form
      className="bg-white px-4 pb-4 pt-6 mb-28 w-[700px] mx-auto shadow-md rounded-md flex flex-col gap-8"
      onSubmit={() => {}}
    >
      <h1 className="font-bold text-center text-2xl">Create New Coupon code</h1>

      <div className="flex flex-col gap-6">
        <div>
          <div>
            <CustomInput
              required={true}
              type={"text"}
              label={"Name"}
              placeholder={"coupon name..."}
              onBlur={() => {}}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setName(e.target.value)
              }
              value={name}
            />
          </div>
        </div>

        <div>
          <div>
            <CustomInput
              required={true}
              type={"number"}
              label={"Discount Percentage %"}
              placeholder={"coupon discount percentage..."}
              onBlur={() => {}}
              onChange={(e: { target: { value: SetStateAction<null> } }) =>
                setValue(e.target.value)
              }
              value={value}
            />
          </div>
        </div>

        <div>
          <div>
            <CustomInput
              required={true}
              type={"number"}
              label={"Min Amount"}
              placeholder={"coupon minimum Amount..."}
              onBlur={() => {}}
              onChange={(e: { target: { value: SetStateAction<null> } }) =>
                setMinAmount(e.target.value)
              }
              value={minAmount}
            />
          </div>
        </div>

        <div>
          <div>
            <CustomInput
              required={true}
              type={"number"}
              label={"Max Amount"}
              placeholder={"coupon maximum Amount..."}
              onBlur={() => {}}
              onChange={(e: { target: { value: SetStateAction<null> } }) =>
                setMaxAmount(e.target.value)
              }
              value={maxAmount}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="form-btn text-sm"
        onClick={() => setShowCouponForm(false)}
      >
        Create event
      </button>
    </form>
  );
}
