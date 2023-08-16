import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import CartModal from "./Modals/CartModal.tsx";
import { useEffect, useState } from "react";
import WishlistModal from "./Modals/WishlistModal.tsx";
import { useSelector } from "react-redux";

function Links() {
  const navigate = useNavigate();
  const [showWishlistModal, setShowWishlistModal] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  // ** RTK - User State
  const { isAuthenticated } = useSelector((state: any) => state.user);

  // ** Check if the user is already logged in
  useEffect(() => {
    if (isAuthenticated === true) {
    }
  }, []);

  // ** Handle Wishlist Model
  const handleWishlistModel = () => {
    setShowWishlistModal(true);
  };

  // ** Handle Cart Model
  const handleCartModel = () => {
    if (isAuthenticated) {
      setShowCartModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <div className="relative cursor-pointer" onClick={handleWishlistModel}>
          <AiOutlineHeart className="w-6 h-6" />
          <p className="absolute text-xs bg-black rounded-full flex items-center justify-center text-white px-1 py-0.5 -top-2 -right-1">
            4
          </p>
        </div>

        <div className="relative cursor-pointer" onClick={handleCartModel}>
          <BsCart4 className="w-6 h-6" />
          <p className="absolute text-xs bg-black rounded-full flex items-center justify-center text-white px-1 py-0.5 -top-2 -right-1">
            2
          </p>
        </div>

        <Link
          to={`${isAuthenticated ? "/profile" : "/login"}`}
          className="cursor-pointer"
        >
          <AiOutlineUser className="w-6 h-6" />
        </Link>
      </div>

      {showCartModal && <CartModal setShowModal={setShowCartModal} />}
      {showWishlistModal && (
        <WishlistModal setShowModal={setShowWishlistModal} />
      )}
    </>
  );
}

export default Links;
