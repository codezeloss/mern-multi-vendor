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
          <h1 className={"text-5xl font-bold mb-6"}>
            Your Ultimate Tech
            <br /> Shopping Destination
          </h1>
          <p className={"text-base mb-4"}>
            Dive into a world of innovation and possibilities as you explore our
            vast collection of cutting-edge products. We bring you the latest
            gadgets to elevate your digital lifestyle.
          </p>
          <button
            className="bg-black text-sm text-white font-medium py-2.5 px-11 rounded-md"
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
