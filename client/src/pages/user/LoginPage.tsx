import LoginForm from "../../components/LoginPage/LoginForm.tsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function LoginPage() {
  const navigate = useNavigate();

  // ** RTK - User State
  const { isAuthenticated } = useSelector((state: any) => state.user);

  // ** Check if the user is already logged in
  useEffect(() => {
    if (isAuthenticated === true) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;
