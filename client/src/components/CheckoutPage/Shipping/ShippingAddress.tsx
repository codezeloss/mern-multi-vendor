import { Link } from "react-router-dom";
import CustomInput from "../CustomInput.tsx";

function ShippingAddress() {
  return (
    <>
      <div>
        <div className="bg-white p-4 w-fit rounded-md">
          <h2 className="font-bold mb-4">shipping Address</h2>

          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2.5">
              <CustomInput
                label={"Full Name"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
              <CustomInput
                label={"Phone Number"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
              <CustomInput
                label={"Country"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
              <CustomInput
                label={"Address 1"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
            </div>

            <div className="flex flex-col gap-2.5">
              <CustomInput
                label={"Email Address"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
              <CustomInput
                label={"Zip Code"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
              <CustomInput
                label={"City"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
              <CustomInput
                label={"Address 2"}
                type={"text"}
                value={""}
                handleInput={() => {}}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div />
          <Link
            to={"/checkout/payment"}
            className="w-fit font-medium py-2.5 px-11 bg-black text-white rounded-md mt-2 text-sm hover:bg-gray-500 hover:text-white"
          >
            Go to Payment
          </Link>
        </div>
      </div>
    </>
  );
}

export default ShippingAddress;
