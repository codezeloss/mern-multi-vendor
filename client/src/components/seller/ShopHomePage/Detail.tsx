interface Props {
  title: string;
  description: string;
}

export default function Detail({ title, description }: Props) {
  return (
    <div className="text-sm">
      <p className="font-bold text-black">{title}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
