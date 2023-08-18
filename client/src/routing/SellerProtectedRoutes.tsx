import { Navigate } from "react-router-dom";

interface Props {
  isSeller: boolean;
  children: any;
}

const SellerProtectedRoutes = ({ isSeller, children }: Props) => {
  if (!isSeller) {
    return <Navigate to={`/seller/login`} replace />;
  }
  return children;
};

export default SellerProtectedRoutes;
