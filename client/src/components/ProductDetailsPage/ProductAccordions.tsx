import { useState } from "react";
import Description from "./Description.tsx";
import Reviews from "./Reviews.tsx";
import SellerInfo from "./SellerInfo.tsx";

function ProductAccordions() {
  const [active, setActive] = useState(1);
  console.log(active);

  return (
    <>
      <div className={"mb-20 bg-gray-100 py-8"}>
        <div className="flex items-center justify-between font-semibold mb-4 px-8">
          <p
            className={`px-8 py-3 cursor-pointer hover:bg-gray-200 border-b-2 ${
              active === 1 && "border-black"
            }`}
            onClick={() => setActive(1)}
          >
            Product Description
          </p>
          <p
            className={`px-8 py-3 cursor-pointer hover:bg-gray-200 border-b-2 ${
              active === 2 && "border-black"
            }`}
            onClick={() => setActive(2)}
          >
            Product Reviews
          </p>
          <p
            className={`px-8 py-3 cursor-pointer hover:bg-gray-200 border-b-2 ${
              active === 3 && "border-black"
            }`}
            onClick={() => setActive(3)}
          >
            Seller Information
          </p>
        </div>

        <div className={"px-8"}>
          {active === 1 && <Description />}
          {active === 2 && <Reviews />}
          {active === 3 && <SellerInfo />}
        </div>
      </div>
    </>
  );
}

export default ProductAccordions;
