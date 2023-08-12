import FooterCTA from "./FooterCTA.tsx";
import FooterLinks from "./FooterLinks.tsx";
import FooterLogo from "./FooterLogo.tsx";
import SubFooter from "./SubFooter.tsx";

function Footer() {
  return (
    <footer>
      <FooterCTA />

      <div className="bg-mine-shaft py-11 px-6 text-white">
        <div className="max-w-[1500px] mx-auto bg-mine-shaft flex items-start justify-between gap-4 ">
          <FooterLogo />
          <FooterLinks />
        </div>
        <SubFooter />
      </div>
    </footer>
  );
}

export default Footer;
