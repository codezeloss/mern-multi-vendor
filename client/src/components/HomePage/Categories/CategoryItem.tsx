interface Props {
  title: string;
  image: any;
}

function CategoryItem({ title, image }: Props) {
  return (
    <div className="flex items-center gap-2 justify-between p-8 cursor-pointer hover:bg-gray-100">
      <p className="text-sm font-medium hover:underline">{title}</p>
      <img className={"w-20 h-20"} src={image} alt="" />
    </div>
  );
}

export default CategoryItem;
