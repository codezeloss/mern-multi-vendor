interface Props {
  img1: any;
  img2: any;
  img3: any;
}

function ProductImages({ img1, img2, img3 }: Props) {
  return (
    <>
      <div className="w-[40%] flex flex-col gap-4">
        <img
          className="text-sm w-full h-[320px] object-contain border-[1px] border-gray/[.1] p-8"
          src={img1}
          alt="Product image"
        />

        <div className="flex items-center gap-4">
          <img
            className="text-sm w-full border-[1px] border-gray/[.1] p-4"
            src={img2}
            alt="Product image"
          />
          <img
            className="text-sm w-full border-[1px] border-gray/[.1] p-4"
            src={img3}
            alt="Product image"
          />
          <img
            className="text-sm w-full border-[1px] border-gray/[.1] p-4"
            src={img3}
            alt="Product image"
          />
        </div>
      </div>
    </>
  );
}

export default ProductImages;
