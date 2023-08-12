interface Props {
  icon: any;
  title: string;
  description: string;
}

function BrandingItem({ icon, title, description }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="">{icon}</div>

      <div>
        <p className="font-bold text-sm">{title}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default BrandingItem;
