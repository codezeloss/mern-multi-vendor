interface Props {
  title: string;
  image: any;
}

function CategoryItem({ title, image }: Props) {
  return (
    <div className="flex items-center gap-2 justify-between p-8 cursor-pointer">
      <p className="text-sm font-semibold hover:underline">{title}</p>
      <img className={"w-20 h-20 object-contain"} src={image} alt="" />
    </div>
  );
}

export default CategoryItem;
