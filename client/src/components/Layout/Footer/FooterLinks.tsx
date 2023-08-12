import {
  footerCompanyLinks,
  footerShopLinks,
  footerSupportLinks,
} from "../../../static/data.tsx";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="grid grid-cols-3 justify-between gap-x-24 gap-y-8 text-sm">
      <div>
        <h4 className={"font-bold mb-3"}>Company</h4>
        <div className={"flex flex-col text-gray-300 gap-2"}>
          {footerCompanyLinks.map((element) => (
            <Link to={element.link}>{element.name}</Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className={"font-bold mb-3"}>Shop</h4>
        <div className={"flex flex-col text-gray-300 gap-2"}>
          {footerShopLinks.map((element) => (
            <Link to={element.link}>{element.name}</Link>
          ))}
        </div>
      </div>

      <div>
        <h4 className={"font-bold mb-3"}>Support</h4>
        <div className={"flex flex-col text-gray-300 gap-2"}>
          {footerSupportLinks.map((element) => (
            <Link to={element.link}>{element.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
