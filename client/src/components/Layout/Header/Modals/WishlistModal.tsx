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
        handleCloseClick={() => setShowModal(false)}
        numberOfItems={4}
        products={
          <>
            <ModalProduct setShowModal={setShowModal} />
            <ModalProduct setShowModal={setShowModal} />
            <ModalProduct setShowModal={setShowModal} />
            <ModalProduct setShowModal={setShowModal} />
          </>
        }
      />
    </>
  );
}

export default WishlistModal;
