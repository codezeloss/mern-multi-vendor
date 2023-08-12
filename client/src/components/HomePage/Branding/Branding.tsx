import { brandingData } from "../../../static/data.tsx";
import BrandingItem from "./BrandingItem.tsx";

function Branding() {
  return (
    <section className="bg-white flex items-center justify-between gap-2 p-8 rounded-md my-8">
      {brandingData.map((brand) => (
        <div key={brand.id}>
          <BrandingItem
            icon={brand.icon}
            title={brand.title}
            description={brand.description}
          />
        </div>
      ))}
    </section>
  );
}

export default Branding;
