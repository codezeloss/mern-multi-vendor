import { Link } from "react-router-dom";

interface Props {
  link: string;
  icon: any;
  title: string;
  current: boolean;
}

function NavigationLink({ link, icon, title, current }: Props) {
  return (
    <Link to={link}>
      <div
        className={`flex items-center gap-2 hover:text-red-700 my-3 ${
          current ? "text-red-700" : ""
        }`}
      >
        <div className="text-lg">{icon}</div>
        <p className="text-sm">{title}</p>
      </div>
    </Link>
  );
}

export default NavigationLink;
