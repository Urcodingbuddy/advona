export const HeroMessage = () => {
  return (
    <>
      <section id="heroMessage_head">
        <div
          id="intoMsg"
          className="h-[40rem] w-full px-4 sm:px-6 lg:px-8 max-w-7xl flex justify-center items-center mx-auto"
        >
          <div className="max-w-7xl w-full flex flex-col md:flex-row gap-5 px-4">
            <div id="leftMssg" className="w-full lg:w-1/2 h-full text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold flex z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">
                Where ideas move faster than obstacles.
              </h1>
            </div>
            <div
              id="rightMssg"
              className="w-full lg:w-1/2 h-full text-white lg:justify-end flex"
            >
              <div className="text-sm sm:text-md md:text-lg lg:text-xl font-medium leading-7 w-full lg:w-18/20">
                <span className="text-gray-500">
                  At Advona, we turn complexity into clarity — crafting products
                  that grow and brands that scale. From MVPs to market leaders,
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
                  we keep your digital ecosystem fast, focused, and
                  future-ready. No chaos. No guesswork. Just seamless growth
                  that moves with purpose.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroMessage;
