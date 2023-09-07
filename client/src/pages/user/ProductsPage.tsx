import Product from "../../components/Product.tsx";
import { productData } from "../../static/data.tsx";

function ProductsPage() {
  return (
    <>
      <main
        className={
          "grid grid-cols-5 gap-2 items-center px-6 py-8 max-w-[1500px] mx-auto"
        }
      >
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
      </main>
    </>
  );
}

export default ProductsPage;
