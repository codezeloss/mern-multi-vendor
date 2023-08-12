import Product from "../Product.tsx";

function BestDeals() {
  return (
    <section className={"mb-8"}>
      <h2 className={"text-2xl font-bold mb-3"}>Best Deals</h2>

      <div className={"flex items-center gap-4"}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}

export default BestDeals;
