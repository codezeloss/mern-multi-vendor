import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner.tsx";

interface Props {
  children: any;
}

const UserProtectedRoute = ({ children }: Props) => {
  // ** RTK - User state
  const { isAuthenticated: isUser, isLoading } = useSelector(
    (state: any) => state.user
  );

  if (isLoading === false) {
    if (!isUser) {
      return <Navigate to={"/login"} replace />;
    }

    return children;
  } else {
    return <Spinner />;
  }
};

export default UserProtectedRoute;
