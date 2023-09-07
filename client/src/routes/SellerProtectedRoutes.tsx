import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner.tsx";

interface Props {
  children: any;
}

const SellerProtectedRoutes = ({ children }: Props) => {
  // ** RTK - seller state
  const { isAuthenticated: isSeller, isLoading } = useSelector(
    (state: any) => state.seller
  );

  if (isLoading === false) {
    if (!isSeller) {
      return <Navigate to={`/seller/login`} replace />;
    }

    return children;
  } else {
    return <Spinner />;
  }
};

export default SellerProtectedRoutes;
