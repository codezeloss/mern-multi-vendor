function SellerInfo() {
  return (
    <div className={"p-6 flex items-start justify-between"}>
      <div className={"max-w-[600px]"}>
        <div className={"flex items-center gap-2 mb-6"}>
          <div className={"bg-gray-700 rounded-full w-16 h-16"} />
          <div className={"flex flex-col"}>
            <p className={"font-semibold text-blue-700"}>Amazon Ltd</p>
            <p className={"font-semibold text-xs text-gray-400"}>4.5 Ratings</p>
          </div>
        </div>
        <p className={"text-sm"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          repellat pariatur inventore reprehenderit minus obcaecati ut ipsa,
          illo quas magnam excepturi beatae. Deleniti ipsa reiciendis quidem
          dolores natus, odio perspiciatis.
        </p>
      </div>

      <div className={"text-sm"}>
        <p className={"mb-1.5"}>
          <span className={"font-semibold"}>Joined On: </span>29 July, 2020
        </p>
        <p className={"mb-1.5"}>
          <span className={"font-semibold"}>Total Products: </span>145
        </p>
        <p className={"mb-4"}>
          <span className={"font-semibold"}>Total reviews: </span>1500
        </p>
        <button className="bg-black hover:bg-black/50 py-3 px-4 text-white font-medium rounded-md text-sm flex items-center gap-1">
          Visit Shop
        </button>
      </div>
    </div>
  );
}

export default SellerInfo;
