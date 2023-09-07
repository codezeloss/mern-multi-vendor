import Detail from "./Detail.tsx";

export default function ShopInfosCard() {
  return (
    <>
      <div className="bg-white rounded-md shadow-md min-w-[340px] h-full px-4 pb-4 pt-8 flex flex-col gap-11">
        <div>
          <div className="relative bg-gray-500 w-48 h-48 rounded-full mx-auto border-2 border-black" />
          <h1 className="font-bold text-xl mt-2 text-center">Shop name</h1>
        </div>

        <div className="flex flex-col gap-4 px-2">
          <Detail title={"Address"} description={"Shop address here"} />
          <Detail title={"Phone Number"} description={"1236547989"} />
          <Detail title={"Total Products"} description={"24"} />
          <Detail title={"Shop Ratings"} description={"4/5"} />
          <Detail title={"Joined"} description={"18-05-2023"} />
        </div>

        <div className="flex flex-col gap-2">
          <button
            className="w-full text-center text-sm py-2.5 px-6 text-white bg-black font-semibold rounded-md"
            type="button"
          >
            Edit Shop
          </button>
          <button
            className="w-full text-center text-sm py-2.5 px-6 text-white bg-red-500 font-semibold rounded-md"
            type="button"
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}
