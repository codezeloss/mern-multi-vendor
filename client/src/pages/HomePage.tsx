import Hero from "../components/HomePage/Hero.tsx";
import Categories from "../components/HomePage/Categories/Categories.tsx";
import Branding from "../components/HomePage/Branding/Branding.tsx";
import BestDeals from "../components/HomePage/BestDeals.tsx";
import PopularEvents from "../components/HomePage/PopularEvents.tsx";

function HomePage() {
  return (
    <main>
      <Hero />
      <div className={"px-6 py-2"}>
        <Branding />
        <Categories />
        <BestDeals />
        <PopularEvents />
      </div>
    </main>
  );
}

export default HomePage;
