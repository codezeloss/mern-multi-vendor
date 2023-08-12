import { FaShopware } from "react-icons/fa";

function Logo() {
  return (
    <div className={"flex items-center gap-1"}>
      <FaShopware className={"text-3xl"} />
      <h1 className={"text-3xl font-bold"}>vendoShop</h1>
    </div>
  );
}

export default Logo;
