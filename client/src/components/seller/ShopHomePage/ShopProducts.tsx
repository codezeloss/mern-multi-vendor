import { productData } from "../../../static/data.tsx";
import Product from "../../Product.tsx";

export default function ShopProducts() {
  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {productData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product?.name}
            image_Url={product.image_Url[0].url}
            shopName={product.shop.name}
            price={product.price}
            discount_price={product.discount_price}
            rating={product.rating}
            total_sell={product.total_sell}
          />
        ))}
      </div>
    </>
  );
}
