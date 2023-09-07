import Product from "../Product.tsx";
import { productData } from "../../static/data.tsx";

function FeaturedProducts() {
  return (
    <section className={"mb-8"}>
      <h2 className={"text-2xl font-bold mb-3"}>Featured Products</h2>

      <div className={"flex items-center gap-4"}>
        <Product
          key={productData[0].id}
          id={productData[0].id}
          name={productData[0]?.name}
          image_Url={productData[0].image_Url[0].url}
          shopName={productData[0].shop.name}
          price={productData[0].price}
          discount_price={productData[0].discount_price}
          rating={productData[0].rating}
          total_sell={productData[0].total_sell}
        />
      </div>
    </section>
  );
}

export default FeaturedProducts;
