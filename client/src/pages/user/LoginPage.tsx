import LoginForm from "../../components/LoginPage/LoginForm.tsx";

function LoginPage() {
  {
    /*
    const navigate = useNavigate();

    // ** RTK - User State
    const {isAuthenticated} = useSelector((state: any) => state.user);

    // ** Check if the user is already logged in
    useEffect(() => {
      if (isAuthenticated === true) {
        navigate("/");
      }
    }, []);
  */
  }

  return (
    <>
      <LoginForm />
    </>
  );
}

export default LoginPage;
