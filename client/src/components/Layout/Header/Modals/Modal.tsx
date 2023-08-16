import { GrClose } from "react-icons/gr";
import { HiOutlineInboxIn } from "react-icons/hi";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  handleCloseClick: any;
  handleCheckoutClick?: any;
  numberOfItems: number;
  products: any;
}

function Modal({
  title,
  handleCloseClick,
  handleCheckoutClick,
  numberOfItems,
  products,
}: Props) {
  return (
    <>
      <div className="w-full bg-black/50 z-20 absolute left-0 right-0 top-0 h-full">
        <div className="absolute flex flex-col justify-between top-0 right-0 h-screen bg-white w-[450px] z-40 py-8 px-6">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="font-bold text-black text-xl">Your {title}</p>
              <GrClose
                className="text-lg cursor-pointer"
                onClick={handleCloseClick}
              />
            </div>

            <div className="flex items-center gap-1 mb-11 text-black">
              <HiOutlineInboxIn className="text-xl" />
              <p className="text-base font-semibold">{numberOfItems} items</p>
            </div>

            <div className="flex h-full flex-col gap-6">{products}</div>
          </div>

          {title === "Cart" && (
            <Link to={"/checkout/shipping"}>
              <button
                type="button"
                className="w-full text-sm font-bold p-3 text-white bg-red-800 hover:bg-red-600 rounded-md"
                onClick={handleCheckoutClick}
              >
                Checkout Now ($1080)
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Modal;
