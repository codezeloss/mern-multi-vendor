import Hero from "../../components/HomePage/Hero.tsx";
import Categories from "../../components/HomePage/Categories/Categories.tsx";
import Branding from "../../components/HomePage/Branding/Branding.tsx";
import BestDeals from "../../components/HomePage/BestDeals.tsx";
import PopularProducts from "../../components/HomePage/PopularProducts.tsx";
import FeaturedProducts from "../../components/HomePage/FeaturedProducts.tsx";
import Marquees from "../../components/HomePage/Marquees.tsx";

function HomePage() {
  return (
    <main>
      <Hero />
      <div className={"px-6 py-2 max-w-[1500px] mx-auto"}>
        <Branding />
        <Categories />
        <BestDeals />
        <PopularProducts />
        <FeaturedProducts />
        <Marquees />
      </div>
    </main>
  );
}

export default HomePage;
