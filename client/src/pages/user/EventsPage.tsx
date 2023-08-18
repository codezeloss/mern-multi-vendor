import PopularProduct from "../../components/HomePage/PopularProduct.tsx";

function EventsPage() {
  return (
    <>
      <main
        className={"grid grid-cols-2 gap-4 px-6 py-8 max-w-[1500px] mx-auto"}
      >
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
        <PopularProduct />
      </main>
    </>
  );
}

export default EventsPage;
