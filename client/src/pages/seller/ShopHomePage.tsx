import { useSelector } from "react-redux";

function ShopHomePage() {
  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { isSuccess, isError, isLoading, isAuthenticated, seller } =
    sellerState;

  return <main>ShopHomePage</main>;
}

export default ShopHomePage;
