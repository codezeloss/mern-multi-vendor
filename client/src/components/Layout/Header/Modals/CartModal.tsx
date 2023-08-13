import ModalProduct from "./ModalProduct.tsx";
import Modal from "./Modal.tsx";

interface Props {
  setShowModal: any;
}

function CartModal({ setShowModal }: Props) {
  return (
    <>
      <Modal
        title={"Wishlist"}
        handleClick={() => setShowModal(false)}
        numberOfItems={2}
        products={
          <>
            <ModalProduct />
            <ModalProduct />
          </>
        }
      />
    </>
  );
}

export default CartModal;
