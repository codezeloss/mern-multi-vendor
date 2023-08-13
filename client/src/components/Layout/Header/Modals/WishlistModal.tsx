import ModalProduct from "./ModalProduct.tsx";
import Modal from "./Modal.tsx";

interface Props {
  setShowModal: any;
}

function WishlistModal({ setShowModal }: Props) {
  return (
    <>
      <Modal
        title={"Wishlist"}
        handleClick={() => setShowModal(false)}
        numberOfItems={4}
        products={
          <>
            <ModalProduct />
            <ModalProduct />
            <ModalProduct />
            <ModalProduct />
          </>
        }
      />
    </>
  );
}

export default WishlistModal;
