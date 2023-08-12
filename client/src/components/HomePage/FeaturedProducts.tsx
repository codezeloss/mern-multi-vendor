import Product from "../Product.tsx";

function FeaturedProducts() {
  return (
    <section className={"mb-8"}>
      <h2 className={"text-2xl font-bold mb-3"}>Featured Products</h2>

      <div className={"flex items-center gap-4"}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}

export default FeaturedProducts;
