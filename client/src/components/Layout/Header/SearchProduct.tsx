import { Link } from "react-router-dom";
import { Key } from "react";

interface Props {
  index: Key | null | undefined;
  id: string;
  image: string;
  name: string;
}

function SearchProduct({ index, id, image, name }: Props) {
  return (
    <Link className="w-full" to={`product/${id}`}>
      <div
        key={index}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-200"
      >
        <img className="w-10 h-10 object-contain" src={image} alt="" />
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </Link>
  );
}

export default SearchProduct;
