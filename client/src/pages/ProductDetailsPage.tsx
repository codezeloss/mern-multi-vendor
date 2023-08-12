import ProductImages from "../components/ProductDetailsPage/ProductImages.tsx";
import ProductDetails from "../components/ProductDetailsPage/ProductDetails.tsx";
import iphone from "../assets/iphone.jpg";

function ProductDetailsPage() {
  return (
    <main className={"bg-white w-full"}>
      <div className={"bg-white px-6 py-12 max-w-[1400px] mx-auto"}>
        <div className={"flex items-center gap-8"}>
          <div className={"w-[50%]"}>
            <ProductImages img1={iphone} img2={iphone} img3={iphone} />
          </div>
          <div className={"w-[50%]"}>
            <ProductDetails />
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailsPage;
