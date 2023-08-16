import AddressItem from "./AddressItem.tsx";

function Address() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-semibold text-lg">Addresses</h2>
        <button
          type="button"
          className="bg-black text-sm text-white font-medium py-2.5 px-8 rounded-md"
        >
          Add New
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <AddressItem />
      </div>
    </>
  );
}

export default Address;
