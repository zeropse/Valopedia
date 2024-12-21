const Hero = () => {
  return (
    <section
      id="banner"
      className="relative w-full h-[65vh] overflow-hidden bg-[#2c2c2c]"
    >
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-[#e0aa3e]">
          Valopedia
        </h1>
        <p className="text-lg sm:text-xl mb-6 px-10">
          My personal gameplay showcase website
        </p>
        <div className="mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-14 h-14 text-[#e0aa3e] text-3xl border-2 border-[#e0aa3e] cursor-pointer rounded-full"
            onClick={() => {
              document
                .querySelector(".inner-content")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12.75L12 19.5m0 0l-7.5-6.75M12 19.5V4.5"
            />
          </svg>
        </div>
      </div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="./src/assets/images/banner.jpeg"
      >
        <source src="./src/assets/banner.webm" type="video/mp4" />
        <img
          src="./src/assets/images/banner.jpeg"
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      </video>
    </section>
  );
};

export default Hero;
