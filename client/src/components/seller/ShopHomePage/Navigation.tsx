import { Link } from "react-router-dom";

interface Props {
  activePath: number;
  setActivePath: any;
}

export default function Navigation({ activePath, setActivePath }: Props) {
  return (
    <>
      <div className="flex items-center justify-between mb-8 text-sm">
        <div className="flex items-center gap-4">
          <div
            className={`cursor-pointer ${
              activePath === 1
                ? "font-semibold text-white bg-orange-500 px-4 py-2.5 rounded-md"
                : "font-semibold"
            }`}
            onClick={() => setActivePath(1)}
          >
            Shop Products
          </div>
          <div
            className={`cursor-pointer ${
              activePath === 2
                ? "font-semibold text-white bg-orange-500 px-4 py-2.5 rounded-md"
                : "font-semibold"
            }`}
            onClick={() => setActivePath(2)}
          >
            Running Events
          </div>
          <div
            className={`cursor-pointer ${
              activePath === 3
                ? "font-semibold text-white bg-orange-500 px-4 py-2.5 rounded-md"
                : "font-semibold"
            }`}
            onClick={() => setActivePath(3)}
          >
            Shop Reviews
          </div>
        </div>

        <Link
          className="text-center text-sm py-2.5 px-4 text-white bg-black font-semibold rounded-md"
          to={"/seller/dashboard/"}
        >
          My Dashboard
        </Link>
      </div>
    </>
  );
}
