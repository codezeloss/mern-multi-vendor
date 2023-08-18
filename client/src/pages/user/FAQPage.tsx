import Accordions from "../../components/FAQPage/Accordions.tsx";

function FaqPage() {
  return (
    <>
      <main className={"max-w-[1500px] mx-auto px-6 py-8"}>
        <h1 className={"text-4xl font-bold mb-6"}>FAQ</h1>

        <Accordions />
      </main>
    </>
  );
}

export default FaqPage;
