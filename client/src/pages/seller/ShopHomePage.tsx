import ShopInfosCard from "../../components/seller/ShopHomePage/ShopInfosCard.tsx";
import ShopAdditionalDetails from "../../components/seller/ShopHomePage/ShopAdditionalDetails.tsx";

function ShopHomePage() {
  return (
    <main className="w-full h-full flex gap-8 py-11 px-4 bg-gray-100">
      <ShopInfosCard />
      <ShopAdditionalDetails />
    </main>
  );
}

export default ShopHomePage;
