import SellerLoginForm from "../../components/seller/SellerLoginForm.tsx";

function SellerLoginPage() {
  {
    /*const navigate = useNavigate();

    // ** RTK - seller state
    const {
      isAuthenticated: isSeller,
      isLoading,
      seller,
    } = useSelector((state: any) => state.seller);

    useEffect(() => {
      if (isSeller === true) {
        navigate(`/shop/${seller._id}`);
      }
    }, [isLoading, isSeller]);
  */
  }

  return (
    <>
      <SellerLoginForm />
    </>
  );
}

export default SellerLoginPage;
