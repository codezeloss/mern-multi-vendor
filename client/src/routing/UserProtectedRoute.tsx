import { Navigate } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  children: any;
}

const UserProtectedRoute = ({ isAuthenticated, children }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default UserProtectedRoute;
