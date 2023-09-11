import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../../features/seller/product/productSlice.ts";
import ProductsTable from "../../../components/seller/Dashboard/AllProductsPage/ProductsTable.tsx";

export default function AllProductsPage() {
  const dispatch = useDispatch();

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  // ** RTK - Products state
  const productState = useSelector((state: any) => state.product);
  const { isLoading: productsLoading, products } = productState;

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllProducts(seller._id));
  }, []);

  return (
    <>
      {products && products.length > 0 && productsLoading === false ? (
        <ProductsTable data={products} />
      ) : (
        <div
          className={
            "w-24 h-24 rounded-full animate-spin mx-auto mt-8 border-2 border-solid border-blue-500 border-t-transparent my-6"
          }
        />
      )}
      {products && products.length === 0 && (
        <h1 className="font-bold text-xl text-center mt-11">
          No Products Found!
        </h1>
      )}
    </>
  );
}
