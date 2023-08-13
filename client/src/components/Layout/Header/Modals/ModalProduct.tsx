import iphone from "../../../../assets/iphone.jpg";
import { GrClose } from "react-icons/gr";

function ModalProduct() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-gray-200 pb-4">
      <div className="flex items-center gap-2">
        <img className="w-24" src={iphone} alt="" />
        <div>
          <p className="font-bold text-sm">iphone 14 pro max 256GB</p>
          <p className="text-gray-500 text-xs">$1090 * 1</p>
          <p className="font-semibold text-base text-red-800">$1090</p>
        </div>
      </div>
      <GrClose className="text-sm cursor-pointer" />
    </div>
  );
}

export default ModalProduct;
