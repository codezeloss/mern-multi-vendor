import iphone from "../../../../assets/iphone.jpg";
import { GrClose } from "react-icons/gr";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  setShowModal: any;
}

function ModalProduct({ setShowModal }: Props) {
  return (
    <Link to={`/product/123`} onClick={() => setShowModal(false)}>
      <div className="flex items-center justify-between border-b-[1px] border-gray-200 pb-4">
        <div className="flex items-center gap-2">
          <img className="w-24" src={iphone} alt="" />
          <div className="pr-4">
            <p className="font-bold text-sm mb-2 text-black">
              iphone 14 pro max 256GB iphone 14 pro max 256GB
            </p>
            <p className="text-gray-500 text-xs">$1090 * 1</p>
            <p className="font-semibold text-base text-red-800">$1090</p>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-3 text-gray-500">
          <MdAddShoppingCart className="text-lg cursor-pointer hover:text-blue-700" />
          <GrClose className="text-base cursor-pointer" />
        </div>
      </div>
    </Link>
  );
}

export default ModalProduct;
