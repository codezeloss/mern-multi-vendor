import iphone from "../assets/iphone.jpg";
import Rating from "@mui/material/Rating";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className={"bg-white rounded-md w-[275px] px-4 pb-4 pt-6 mb-6"}>
      <div className={"relative"}>
        <Link className={"w-full"} to={"/product/123"}>
          <img
            className="w-full object-contain h-44 mb-4"
            src={iphone}
            alt=""
          />
        </Link>

        <div className="absolute flex flex-col items-center text-lg gap-2 right-0 top-0">
          <button type={"button"} className={"hover:text-red-500"}>
            <FaRegHeart />
          </button>
          <button type={"button"} className={"hover:text-blue-800"}>
            <MdAddShoppingCart />
          </button>
        </div>
      </div>

      <p className={"mb-2 text-xs text-blue-400"}>Amazon Ltd</p>
      <Link to={"/product/123"}>
        <h3 className={"mb-2 text-sm font-semibold hover:underline"}>
          Iphone 14 Pro Max 256GB SSD & 8GB RAM...
        </h3>
      </Link>
      <Rating
        className={"mb-3 text-sm"}
        name="read-only"
        value={4}
        readOnly
        size={"small"}
      />

      <div className={"flex items-center justify-between"}>
        <div className={"flex items-start gap-2"}>
          <p className={"font-bold"}>$1099</p>
          <p
            className={
              "font-semibold text-red-500 text-xs  line-through mt-0.5"
            }
          >
            $2000
          </p>
        </div>
        <p className={"text-green-500 text-xs"}>80 Sold</p>
      </div>
    </div>
  );
}

export default Product;
