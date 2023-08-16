import ModalProduct from "./ModalProduct.tsx";
import Modal from "./Modal.tsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Props {
  setShowModal: any;
}

function CartModal({ setShowModal }: Props) {
  const navigate = useNavigate();

  // ** RTK - User State
  const { isAuthenticated } = useSelector((state: any) => state.user);

  // ** Handle Checkout clicked
  const handleCheckoutClick = () => {
    if (isAuthenticated) {
      setShowModal(false);
      navigate("/checkout/shipping");
    } else {
      setShowModal(false);
      navigate("/login");
    }
  };

  return (
    <>
      <Modal
        title={"Cart"}
        handleCloseClick={() => setShowModal(false)}
        handleCheckoutClick={handleCheckoutClick}
        numberOfItems={2}
        products={
          <>
            <ModalProduct setShowModal={setShowModal} />
            <ModalProduct setShowModal={setShowModal} />
          </>
        }
      />
    </>
  );
}

export default CartModal;
