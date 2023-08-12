import { BsList } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { categoriesData } from "../../../static/data.tsx";
import { Link } from "react-router-dom";

function Categories() {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className={"relative"}>
      <div
        className=" flex items-center gap-4 text-sm cursor-pointer hover:bg-gray-500 p-2"
        onClick={() => setShowCategories(!showCategories)}
      >
        <div className={"flex items-center gap-2"}>
          <BsList />
          <p className="hover:font-semibold cursor-pointer">All Categories</p>
        </div>
        <IoIosArrowDown />
      </div>

      {showCategories && (
        <div className={"absolute bg-white w-[230px] top-[40px] z-20 p-6"}>
          {categoriesData.map((item) => (
            <Link
              to={"/"}
              className={"flex items-center gap-2 mb-3"}
              key={item.id}
            >
              <p className={"text-black text-sm hover:underline"}>
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
