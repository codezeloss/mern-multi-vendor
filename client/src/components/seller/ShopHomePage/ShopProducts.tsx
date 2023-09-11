// import { productData } from "../../../static/data.tsx";
import Product from "../../Product.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../../features/seller/product/productSlice.ts";

export default function ShopProducts() {
  const dispatch = useDispatch();

  // ** RTK - Seller State
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  // ** RTK - Products State
  const productState = useSelector((state: any) => state.product);
  const { products } = productState;

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllProducts(seller?._id));
  }, []);

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {products &&
          products.map((product: any) => (
            <Product
              key={product?._id}
              id={product?._id}
              name={product?.name}
              image_Url={product?.images[0]}
              shopName={product?.shop.shopName}
              price={product?.originalPrice}
              discount_price={product?.discountPrice}
              rating={5}
              total_sell={product?.sold_out}
            />
          ))}
      </div>
    </>
  );
}
