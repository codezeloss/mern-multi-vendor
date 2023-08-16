import { MdOutlineDeleteSweep } from "react-icons/md";

function AddressItem() {
  return (
    <div className="bg-white p-4 flex items-center justify-between border-[1px] border-gray-200 rounded-md">
      <p className="font-semibold text-sm">Default</p>

      <p className="font-medium text-sm">452 Erdman Passage, New York, USA</p>

      <p className="font-medium text-sm">(212) 148-632-123</p>

      <div>
        <MdOutlineDeleteSweep
          className="font-medium text-xl text-red-500 cursor-pointer"
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default AddressItem;
