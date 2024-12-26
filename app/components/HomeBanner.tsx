const HomeBanner = () => {
  return (
    <div className=" mb-8  h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/GT3Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Banner Content */}
      <div className="relative z-10 px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly h-full">
        <div>
          <h1 className="text-white text-4xl font-bold mb-4 animate-fadeIn opacity-0 [animation-delay:0s]">
            Welcome to{" "}
            <img src="/hermusLogoWhite.png" alt="hermus logo" className="h-16 w-auto" />
          </h1>
          <p
            className="text-white text-lg animate-fadeIn opacity-0
            [animation-delay:.5s]"
          >
            Discover a world of luxury, speed, and elegance.
          </p>
        </div>
        <div>
          <button
            className="bg-black
    text-white
    uppercase
    py-3
    px-8
    rounded-none
    border-2
    border-white
    hover:bg-white
    hover:text-black
    hover:border-black
    transition-all
    duration-300
    ease-in-out
    tracking-wider
    shadow-lg
    hover:shadow-2xl
    animate-fadeIn
    opacity-0
    [animation-delay:2s]
    "
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
