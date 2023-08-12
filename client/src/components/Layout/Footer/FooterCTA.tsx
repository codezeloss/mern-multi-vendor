function FooterCta() {
  return (
    <>
      <div className={"bg-black text-white py-8 px-6"}>
        <div
          className={"max-w-[1500px] mx-auto flex items-center justify-between"}
        >
          <h2 className={"font-semibold text-4xl"}>
            Subscribe to get instant
            <br /> new Events & Offers
          </h2>

          <div className={"flex items-center"}>
            <input
              className="text-sm border-0 bg-gray-100 text-black px-3 outline-none py-2 rounded-l-md"
              type="text"
              placeholder={"Enter your email"}
            />
            <button
              className={
                "text-sm bg-gray-500 text-white font-medium py-[9px] rounded-r-md px-3"
              }
              type={"button"}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterCta;
