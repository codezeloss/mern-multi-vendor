import { FiFacebook, FiYoutube } from "react-icons/fi";
import { PiTwitterLogoBold } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Logo.tsx";

function FooterLogo() {
  return (
    <div className={"max-w-[240px]"}>
      <Logo />

      <p className={"text-sm my-4"}>
        The home and elements needed to create beautiful products.
      </p>
      <div className={"flex items-center gap-3 text-xl"}>
        <Link to={""}>
          <FiFacebook />
        </Link>
        <Link to={""}>
          <PiTwitterLogoBold />
        </Link>
        <Link to={""}>
          <FaInstagram />
        </Link>
        <Link to={""}>
          <FiYoutube />
        </Link>
      </div>
    </div>
  );
}

export default FooterLogo;
