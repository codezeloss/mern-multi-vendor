import { MdOutlineAddShoppingCart } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";

function ProductDetails() {
  return (
    <>
      <div>
        <h2 className={"font-bold text-3xl"}>iPhone 14 Pro Max silver Color</h2>

        <p className={"mb-3 text-xs text-blue-500"}>Amazon Ltd</p>

        <p className={"text-sm mb-6 text-gray-700"}>
          The iPhone 14 Pro Max display has rounded corners that follow a
          beautiful curved design, and these corners are within a standard
          rectangle. When measured as a standard rectangular shape, the screen
          is 6.69 inches diagonally (actual viewable area is less). Both models:
          Dynamic Island.
        </p>

        <div className={"flex items-center justify-between mb-6"}>
          <div className={"flex items-start gap-2"}>
            <p className={"font-bold text-2xl"}>$1099</p>
            <p
              className={
                "font-semibold text-red-500 text-sm  line-through mt-0.5"
              }
            >
              $2000
            </p>
          </div>
          <p className={"text-green-500 text-sm font-medium"}>80 Sold</p>
        </div>

        <div className={"mb-8 text-sm flex items-center gap-2"}>
          <p className={"font-medium"}>Quantity:</p>
          <input
            className="w-[90px] bg-gray-200 px-4 py-2 outline-none"
            type="number"
            placeholder="1"
          />
        </div>

        <div className={"flex items-center gap-3 my-4"}>
          <button
            type={"button"}
            className={
              "bg-black hover:bg-black/50 py-3 px-4 text-white font-medium rounded-md text-sm flex items-center gap-1"
            }
          >
            <p>Add to Cart</p>
            <MdOutlineAddShoppingCart className={"text-base"} />
          </button>
          <button
            type={"button"}
            className={
              "bg-black hover:bg-black/50 py-3 px-4 text-white font-medium rounded-md text-sm flex items-center gap-1"
            }
          >
            <p>Add to Wishlist</p>
            <AiOutlineHeart className={"text-base"} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
