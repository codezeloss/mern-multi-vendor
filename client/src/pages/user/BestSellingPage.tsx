import Product from "../../components/Product.tsx";

function BestSellingPage() {
  return (
    <>
      <main
        className={
          "flex gap-4 flex-wrap items-center px-6 py-8 max-w-[1500px] mx-auto"
        }
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
    </>
  );
}

export default BestSellingPage;
