import Marquee from "react-fast-marquee";
import { marqueesData } from "../../static/data.tsx";

function Marquees() {
  return (
    <div className="bg-white rounded-md shadow-sm mb-20">
      <Marquee>
        {marqueesData.map((brand) => (
          <div key={brand.key}>
            <img className="mr-20 w-auto h-auto" src={brand.icon} alt="Brand" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Marquees;
