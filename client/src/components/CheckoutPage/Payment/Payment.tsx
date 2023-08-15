import CardPayment from "./CardPayment.tsx";
import PaypalPayment from "./PaypalPayment.tsx";
import CODPayment from "./CODPayment.tsx";
import { useState } from "react";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <>
      <div className="bg-white w-[617px] flex flex-col pb-8">
        <CardPayment
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <PaypalPayment
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        <CODPayment
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      </div>
    </>
  );
}

export default Payment;
