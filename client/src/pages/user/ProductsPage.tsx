// import { productData } from "../../static/data.tsx";
import Product from "../../components/Product.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../features/seller/product/productSlice.ts";

function ProductsPage() {
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
      <main
        className={
          "grid grid-cols-5 gap-2 items-center px-6 py-8 max-w-[1500px] mx-auto"
        }
      >
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
      </main>
    </>
  );
}

export default ProductsPage;
