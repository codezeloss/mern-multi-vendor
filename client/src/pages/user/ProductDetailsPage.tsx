import ProductImages from "../../components/ProductDetailsPage/ProductImages.tsx";
import ProductDetails from "../../components/ProductDetailsPage/ProductDetails.tsx";
import iphone from "../../assets/iphone.jpg";
import ProductAccordions from "../../components/ProductDetailsPage/ProductAccordions.tsx";
import FeaturedProducts from "../../components/HomePage/FeaturedProducts.tsx";

function ProductDetailsPage() {
  return (
    <>
      <main className={"bg-white w-full"}>
        <div className={"bg-white px-6 py-12 max-w-[1400px] mx-auto"}>
          <div className={"flex items-center gap-8 mb-16"}>
            <ProductImages img1={iphone} img2={iphone} img3={iphone} />
            <ProductDetails />
          </div>
          <ProductAccordions />
          <FeaturedProducts />
        </div>
      </main>
    </>
  );
}

export default ProductDetailsPage;
