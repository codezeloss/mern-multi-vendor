import PopularProduct from "./PopularProduct.tsx";

function PopularProducts() {
  return (
    <section className={"mb-8"}>
      <h2 className={"text-2xl font-bold mb-3"}>Popular Products</h2>

      <div className={"flex items-center gap-4"}>
        <PopularProduct />
        <PopularProduct />
      </div>
    </section>
  );
}

export default PopularProducts;
