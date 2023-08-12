import iphone from "../../assets/iphone.jpg";

function PopularEvents() {
  return (
    <section className={"mb-8"}>
      <h2 className={"text-2xl font-bold mb-3"}>Popular events</h2>

      <div className={"flex items-center gap-4"}>
        <div
          className={
            "bg-white rounded-md px-6 py-12 grid grid-cols-2 items-center gap-2"
          }
        >
          <div className={"cols-span-1"}>
            <div className={"w-full h-full flex items-center justify-center"}>
              <img
                className={"w-72 h-full object-contain"}
                src={iphone}
                alt="Product image"
              />
            </div>
          </div>

          <div className={"cols-span-1"}>
            <h3 className={"text-xl mb-3 font-bold"}>
              Iphone 14 Pro Max 256GB
            </h3>

            <p className={"mb-3 text-sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <div className={"flex items-center gap-12 mb-3"}>
              <div className={"flex items-start gap-2"}>
                <p className={"font-bold text-lg"}>$1099</p>
                <p
                  className={
                    "font-semibold text-red-500 text-sm line-through mt-0.5"
                  }
                >
                  $2000
                </p>
              </div>
              <p className={"text-green-500 text-sm"}>80 Sold</p>
            </div>

            <p className={"text-red-500 font-medium mb-4 text-xl"}>
              Time's up!
            </p>

            <div className={"flex items-center gap-3"}>
              <button
                type={"button"}
                className={
                  "bg-black py-2 px-4 text-white font-medium rounded-md text-sm"
                }
              >
                See Details
              </button>
              <button
                type={"button"}
                className={
                  "bg-black py-2 px-4 text-white font-medium rounded-md text-sm"
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* */}
        <div
          className={
            "bg-white rounded-md px-6 py-12 grid grid-cols-2 items-center gap-2"
          }
        >
          <div className={"cols-span-1"}>
            <div className={"w-full h-full flex items-center justify-center"}>
              <img
                className={"w-72 h-full object-contain"}
                src={iphone}
                alt="Product image"
              />
            </div>
          </div>

          <div className={"cols-span-1"}>
            <h3 className={"text-xl mb-3 font-bold"}>
              Iphone 14 Pro Max 256GB
            </h3>

            <p className={"mb-3 text-sm"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>

            <div className={"flex items-center gap-12 mb-3"}>
              <div className={"flex items-start gap-2"}>
                <p className={"font-bold text-lg"}>$1099</p>
                <p
                  className={
                    "font-semibold text-red-500 text-sm line-through mt-0.5"
                  }
                >
                  $2000
                </p>
              </div>
              <p className={"text-green-500 text-sm"}>80 Sold</p>
            </div>

            <p className={"text-red-500 font-medium mb-4 text-xl"}>
              Time's up!
            </p>

            <div className={"flex items-center gap-3"}>
              <button
                type={"button"}
                className={
                  "bg-black py-2 px-4 text-white font-medium rounded-md text-sm"
                }
              >
                See Details
              </button>
              <button
                type={"button"}
                className={
                  "bg-black py-2 px-4 text-white font-medium rounded-md text-sm"
                }
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularEvents;
