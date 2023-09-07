import { Link } from "react-router-dom";

interface Props {
  link: string;
  current: boolean;
  icon: any;
  title: string;
}

export default function DashboardSideBarLink({
  link,
  current,
  icon,
  title,
}: Props) {
  return (
    <Link to={link}>
      <div
        className={`flex items-center gap-2 hover:text-orange-600 my-3 ${
          current ? "text-orange-300 font-semibold" : ""
        }`}
      >
        <div className="text-lg">{icon}</div>
        <p className="text-sm">{title}</p>
      </div>
    </Link>
  );
}
