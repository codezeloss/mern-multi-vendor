import { useLocation } from "react-router-dom";

function Stepper() {
  const location = useLocation();

  const path = location.pathname.split("/")[2];
  console.log(path);

  return (
    <div className="flex items-center max-w-[800px] mx-auto my-12 px-3">
      <div>
        <p className="py-2 px-4 bg-black text-white font-semibold text-sm rounded-full">
          1.Shipping
        </p>
      </div>

      <div
        className={`w-full h-[3px] ${
          path === "payment" || path === "success" ? "bg-black" : "bg-black/50"
        }`}
      />

      <div>
        <p
          className={`py-2 px-4 text-white font-semibold text-sm rounded-full ${
            path === "payment" || path === "success"
              ? "bg-black"
              : "bg-black/50"
          }`}
        >
          2.Payment
        </p>
      </div>

      <div
        className={`w-full h-[3px] ${
          path === "success" ? "bg-black" : "bg-black/50"
        }`}
      />

      <div>
        <p
          className={`py-2 px-4 text-white font-semibold text-sm rounded-full ${
            path === "success" ? "bg-black" : "bg-black/50"
          }`}
        >
          3.Success
        </p>
      </div>
    </div>
  );
}

export default Stepper;
