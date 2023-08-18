import Product from "../../components/Product.tsx";

function ProductsPage() {
  return (
    <>
      <main
        className={
          "grid grid-cols-5 gap-2 items-center px-6 py-8 max-w-[1500px] mx-auto"
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

export default ProductsPage;
