import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: any;
}

const ProtectedRoute = ({ isAuthenticated, children }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
