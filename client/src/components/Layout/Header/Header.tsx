import { BsArrowRight, BsCart4, BsList } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { navItems } from "../../../static/data.tsx";
import Logo from "../../Logo.tsx";
import Categories from "./Categories.tsx";

function Header() {
  return (
    <header className={"block font-poppins"}>
      <div
        className={
          "max-w-[1500px] mx-auto flex items-center justify-between gap-2 py-6 px-6"
        }
      >
        <Logo />
        <div className={"relative"}>
          <input
            className="text-sm w-[600px] border-0 bg-gray-200 pl-4 outline-none py-2 rounded-md"
            type="text"
            name=""
            id=""
            placeholder={"Search for a product..."}
          />
          <FiSearch className={"w-6 absolute right-2 top-2.5"} />
        </div>
        <button
          className="text-sm py-2 px-4 text-white bg-black font-medium rounded-md flex items-center gap-2"
          type={"button"}
        >
          <p>Join as a Seller</p>
          <BsArrowRight />
        </button>
      </div>

      <div className={"bg-mine-shaft"}>
        <div
          className={
            "max-w-[1500px] mx-auto bg-mine-shaft text-white font-medium flex items-center py-4 px-6 justify-between gap-2"
          }
        >
          <Categories />

          <div className={"flex items-center gap-9 text-sm"}>
            {navItems.map((item) => (
              <Link
                to={item.url}
                className="hover:font-semibold cursor-pointer"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className={"flex items-center gap-4"}>
            <Link to={"/"} className="relative cursor-pointer">
              <AiOutlineHeart className={"w-6 h-6"} />
              <p
                className={
                  "absolute text-xs bg-black rounded-full flex items-center justify-center text-white px-1 py-0.5 -top-2 -right-1"
                }
              >
                0
              </p>
            </Link>
            <Link to={"/"} className="relative cursor-pointer">
              <BsCart4 className={"w-6 h-6"} />
              <p
                className={
                  "absolute text-xs bg-black rounded-full flex items-center justify-center text-white px-1 py-0.5 -top-2 -right-1"
                }
              >
                0
              </p>
            </Link>
            <Link to={"/"} className="cursor-pointer">
              <AiOutlineUser className={"w-6 h-6"} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
