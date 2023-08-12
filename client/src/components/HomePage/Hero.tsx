function Hero() {
  return (
    <>
      <div
        className={
          "relative w-full h-[60vh] flex mx-auto bg-no-repeat font-poppins"
        }
        style={{
          backgroundImage:
            "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
        }}
      >
        <div className="max-w-[600px] absolute top-32 left-[150px]">
          <h1 className={"text-6xl font-bold mb-6"}>
            Best Collection For
            <br /> Home Decoration
          </h1>
          <p className={"text-sm mb-4"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button
            className={
              "bg-black text-sm text-white font-medium py-2.5 px-6 rounded-md"
            }
            type={"button"}
          >
            <p>Shop Now</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
