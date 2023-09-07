// import iphone from "../assets/iphone.jpg";
import Rating from "@mui/material/Rating";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  id: number;
  name: string;
  image_Url: string;
  shopName: string;
  price: number;
  discount_price: number;
  rating: number;
  total_sell: number;
}

function Product({
  id,
  name,
  image_Url,
  shopName,
  price,
  discount_price,
  rating,
  total_sell,
}: Props) {
  return (
    <div className={"bg-white rounded-md w-[275px] px-4 pb-4 pt-6 mb-6"}>
      <div className={"relative"}>
        <Link className={"w-full"} to={`/product/${id}`}>
          <img
            className="w-full text-xs object-contain h-44 mb-4"
            src={image_Url}
            alt={name?.split(" ")[0] + " Product image"}
          />
        </Link>

        <div className="absolute flex flex-col items-center text-lg gap-2 right-0 top-0 bg-white pl-1">
          <button type={"button"} className={"hover:text-red-500"}>
            <FaRegHeart />
          </button>
          <button type={"button"} className={"hover:text-blue-800"}>
            <MdAddShoppingCart />
          </button>
        </div>
      </div>

      <p className={"mb-2 text-xs text-blue-400"}>{shopName}</p>
      <Link to={`/product/${id}`}>
        <h3 className={"mb-2 text-sm font-semibold hover:underline"}>
          {name?.substring(0, 27) + "..."}
        </h3>
      </Link>
      <Rating
        className={"mb-3 text-sm"}
        name="read-only"
        value={rating}
        readOnly
        size={"small"}
      />

      <div className={"flex items-center justify-between"}>
        <div className={"flex items-start gap-2"}>
          <p className={"font-bold"}>${price}</p>
          <p
            className={
              "font-semibold text-red-500 text-xs  line-through mt-0.5"
            }
          >
            ${discount_price}
          </p>
        </div>
        <p className={"text-green-500 text-xs"}>{total_sell} Sold</p>
      </div>
    </div>
  );
}

export default Product;
