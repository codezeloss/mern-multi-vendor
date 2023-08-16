import CustomInput from "../CustomInput.tsx";
import { FiCamera } from "react-icons/fi";

function Profile() {
  return (
    <>
      <h2 className="font-semibold text-lg mb-4">Profile</h2>

      <div>
        <div className="relative bg-gray-500 w-40 h-40 rounded-full mx-auto mb-12 border-2 border-black">
          <img src="" alt="" />
          <button
            type="button"
            className="absolute bottom-0 right-2 bg-white p-2 rounded-full"
          >
            <FiCamera />
          </button>
        </div>

        <form className="w-full grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <CustomInput
              type={"text"}
              label={"Full Name"}
              value={""}
              handleInput={() => {}}
            />
            <CustomInput
              type={"text"}
              label={"Phone Number"}
              value={""}
              handleInput={() => {}}
            />
            <CustomInput
              type={"text"}
              label={"Address 1"}
              value={""}
              handleInput={() => {}}
            />
          </div>

          <div className="space-y-4">
            <CustomInput
              type={"text"}
              label={"Email Address"}
              value={""}
              handleInput={() => {}}
            />
            <CustomInput
              type={"text"}
              label={"Zip Code"}
              value={""}
              handleInput={() => {}}
            />
            <CustomInput
              type={"text"}
              label={"Address 2"}
              value={""}
              handleInput={() => {}}
            />
          </div>
        </form>

        <button
          type="submit"
          className="w-fit font-medium py-2.5 px-12 bg-black text-white rounded-md mt-8 text-sm hover:bg-gray-500 hover:text-white"
        >
          Update
        </button>
      </div>
    </>
  );
}

export default Profile;
