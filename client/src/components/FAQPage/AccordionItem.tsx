import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
}

function AccordionItem({ title, description }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={"bg-white w-full flex flex-col p-4 rounded-md"}>
      <div
        className={"flex items-center justify-between cursor-pointer"}
        onClick={() => setOpen(!open)}
      >
        <p className={"font-medium"}>{title}</p>
        {open && (
          <div>
            <IoIosArrowDown />
          </div>
        )}
        {!open && (
          <div>
            <IoIosArrowUp />
          </div>
        )}
      </div>

      <div>
        {!open && <p className={"text-gray-500 text-sm mt-4"}>{description}</p>}
      </div>
    </div>
  );
}

export default AccordionItem;
