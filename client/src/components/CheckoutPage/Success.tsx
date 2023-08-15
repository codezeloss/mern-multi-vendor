import { GrValidate } from "react-icons/gr";

function Success() {
  return (
    <>
      <main className="flex flex-col items-center justify-center my-16 py-16">
        <GrValidate className="text-9xl mb-6" />
        <h1 className="text-2xl font-semibold">Your order is successful 🔥</h1>
      </main>
    </>
  );
}

export default Success;
