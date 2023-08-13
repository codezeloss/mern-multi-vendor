import { GrClose } from "react-icons/gr";
import ModalProduct from "./ModalProduct.tsx";
import { HiOutlineInboxIn } from "react-icons/hi";

interface Props {
  setShowModal: any;
}

function CartModal({ setShowModal }: Props) {
  return (
    <>
      <div className="w-full bg-black/50 z-20 absolute left-0 right-0 top-0 h-full">
        <div className="fixed top-0 right-0 h-full bg-white w-[450px] z-40 py-8 px-6">
          <div className="flex items-center justify-between mb-6">
            <div />
            <GrClose
              className="text-lg cursor-pointer"
              onClick={() => setShowModal(false)}
            />
          </div>

          <div className="flex items-center gap-1 mb-11 text-black">
            <HiOutlineInboxIn className="text-xl" />
            <p className="text-base font-semibold">2 items</p>
          </div>

          <div className="flex flex-col gap-6">
            <ModalProduct />
            <ModalProduct />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;
