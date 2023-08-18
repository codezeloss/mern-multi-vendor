import Stepper from "../../components/CheckoutPage/Stepper.tsx";
import { useLocation } from "react-router-dom";
import Shipping from "../../components/CheckoutPage/Shipping/Shipping.tsx";
import Success from "../../components/CheckoutPage/Success.tsx";

function CheckoutPage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <>
      <main>
        <Stepper />
        {path === "shipping" && <Shipping />}
        {path === "payment" && <Shipping />}
        {path === "success" && <Success />}
      </main>
    </>
  );
}

export default CheckoutPage;
