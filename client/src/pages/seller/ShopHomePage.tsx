import ShopInfosCard from "../../components/seller/ShopHomePage/ShopInfosCard.tsx";
import ShopNavProducts from "../../components/seller/ShopHomePage/ShopNavProducts.tsx";

function ShopHomePage() {
  return (
    <main className="w-full h-screen flex gap-8 py-11 px-4 bg-gray-100">
      <ShopInfosCard />
      <ShopNavProducts />
    </main>
  );
}

export default ShopHomePage;
