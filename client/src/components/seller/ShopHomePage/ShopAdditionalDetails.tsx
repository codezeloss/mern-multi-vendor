import Navigation from "./Navigation.tsx";
import { useState } from "react";
import ShopProducts from "./ShopProducts.tsx";

export default function ShopAdditionalDetails() {
  const [activePath, setActivePath] = useState(1);

  return (
    <>
      <div>
        <Navigation activePath={activePath} setActivePath={setActivePath} />

        <div>
          {activePath === 1 && <ShopProducts />}
          {activePath === 2 && <ShopProducts />}
          {activePath === 3 && <ShopProducts />}
        </div>
      </div>
    </>
  );
}
