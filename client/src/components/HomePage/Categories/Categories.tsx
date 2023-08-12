import { categoriesData } from "../../../static/data.tsx";
import CategoryItem from "./CategoryItem.tsx";

function Categories() {
  return (
    <section className={"bg-white rounded-md mb-8 grid grid-cols-5 gap-x-2"}>
      {categoriesData.map((category) => (
        <div key={category.id}>
          <CategoryItem title={category.title} image={category.image_Url} />
        </div>
      ))}
    </section>
  );
}

export default Categories;
