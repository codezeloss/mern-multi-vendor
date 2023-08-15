import Logo from "../../Logo.tsx";
import { FiSearch } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { Key, useState } from "react";
import { productData } from "../../../static/data.tsx";
import SearchProduct from "./SearchProduct.tsx";

function TopHeader() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState<any>(null);

  // ** Handle Search input
  const handleSearchChange = (e: { target: { value: any } }) => {
    const term = e.target.value;
    setSearchTerm(term);

    //
    const filteredProducts = productData?.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    // @ts-ignore
    setSearchData(filteredProducts);
  };

  return (
    <div className="max-w-[1500px] mx-auto flex items-center justify-between gap-2 py-6 px-6">
      <Logo />

      <div>
        <div className="relative">
          <input
            className="text-sm w-[600px] border-0 bg-gray-200 pl-4 outline-none py-2 rounded-md"
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <FiSearch className="w-6 absolute right-2 top-2.5" />

          {searchData && searchTerm !== "" && (
            <div className="absolute bg-white shadow-md z-20 py-4 h-fit">
              {searchData.map((product: any, index: Key | null | undefined) => {
                const d = product.name;
                const product_name = d.replace(/\s+/g, "-");

                return (
                  <SearchProduct
                    id={product.id}
                    index={index}
                    image={product.image_Url[0].url}
                    name={product_name}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      <button
        className="text-sm py-2.5 px-6 text-white bg-black font-medium rounded-md flex items-center gap-2"
        type="button"
      >
        <p>Join as a Seller</p>
        <BsArrowRight />
      </button>
    </div>
  );
}

export default TopHeader;
