import { navItems } from "../../../static/data.tsx";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];

  return (
    <div className="flex items-center gap-9 text-sm">
      {navItems.map((item) => (
        <Link to={item.url}>
          <p
            className={`hover:font-bold cursor-pointer ${
              currentPath === item.url.split("/")[1]
                ? "font-bold text-golden-tainoi"
                : "text-gray-100"
            }`}
          >
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
