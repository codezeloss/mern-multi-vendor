import Categories from "./Categories.tsx";
import Navigation from "./Navigation.tsx";
import Links from "./Links.tsx";
import TopHeader from "./TopHeader.tsx";

function Header() {
  return (
    <header className="block font-poppins">
      <TopHeader />

      <div className="bg-mine-shaft">
        <div className="max-w-[1500px] mx-auto bg-mine-shaft text-white font-medium flex items-center py-4 px-6 justify-between gap-2">
          <Categories />
          <Navigation />
          <Links />
        </div>
      </div>
    </header>
  );
}

export default Header;
