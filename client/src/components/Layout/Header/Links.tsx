import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import CartModal from "./Modals/CartModal.tsx";
import { useState } from "react";
import WishlistModal from "./Modals/WishlistModal.tsx";

function Links() {
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-4">
        <div
          className="relative cursor-pointer"
          onClick={() => setShowWishlistModal(true)}
        >
          <AiOutlineHeart className="w-6 h-6" />
          <p className="absolute text-xs bg-black rounded-full flex items-center justify-center text-white px-1 py-0.5 -top-2 -right-1">
            0
          </p>
        </div>

        <div
          className="relative cursor-pointer"
          onClick={() => setShowCartModal(true)}
        >
          <BsCart4 className="w-6 h-6" />
          <p className="absolute text-xs bg-black rounded-full flex items-center justify-center text-white px-1 py-0.5 -top-2 -right-1">
            0
          </p>
        </div>

        <Link to={"/profile"} className="cursor-pointer">
          <AiOutlineUser className="w-6 h-6" />
        </Link>
      </div>

      {showCartModal && <CartModal setShowModal={setShowCartModal} />}
      {showWishlistModal && (
        <WishlistModal setShowModal={setShowWishlistModal} />
      )}
    </div>
  );
}

export default Links;
