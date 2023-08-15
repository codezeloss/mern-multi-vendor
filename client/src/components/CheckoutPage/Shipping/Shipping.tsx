import ShippingAddress from "./ShippingAddress.tsx";
import ShippingBilling from "./ShippingBilling.tsx";
import { useLocation } from "react-router-dom";
import Payment from "../Payment/Payment.tsx";

function Shipping() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <section className="flex items-start justify-center mb-11 gap-6 mx-auto px-3">
      {path === "shipping" && <ShippingAddress />}
      {path === "payment" && <Payment />}
      {(path === "shipping" || path === "payment") && <ShippingBilling />}
    </section>
  );
}

export default Shipping;
