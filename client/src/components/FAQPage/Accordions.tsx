import AccordionItem from "./AccordionItem.tsx";
import { faqData } from "../../static/data.tsx";

function Accordions() {
  return (
    <>
      <div className={"flex flex-col gap-3"}>
        {faqData.map((item, index) => (
          <div key={index}>
            <AccordionItem title={item.title} description={item.description} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordions;
