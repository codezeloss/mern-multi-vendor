import { navItems } from "../../../static/data.tsx";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex items-center gap-9 text-sm">
      {navItems.map((item) => (
        <Link to={item.url} className="hover:font-semibold cursor-pointer">
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default Navigation;
