import React from "react";

// Correct way to import images in React
import HeroRight from "../../assets/images/HeroLeft.webp";
import YellowCircular from "../../assets/images/CircularShape.webp";
import "../../styles/animations.css";

const HrHeroSection = () => {
  return (
    <section className="bg-green-50 px-16">
      <div className="container flex items-end justify-between text-gray-800 select-none">
        {/* Left Content Section */}
        <div className="text-center lg:text-left py-36">
          <div className="absolute top-2 left-2 md:top-10 md:left-10 w-14 h-8 md:w-28 md:h-24 z-10">
            <img
              src={YellowCircular}
              alt="Curved Yellow Arrow"
              className="w-full h-full object-contain animate-rotate"
            />
          </div>

          <p className="text-green-600 font-semibold text-xl md:text-2xl mt-6">
            Start your favorite course
          </p>
          <h1 className="text-xl sm:text-2xl lg:text-[40px] font-bold mt-6 leading-tight">
            Teaching beyond books
            <br className="hidden sm:block" />
            building <span className="text-green-600">confidence</span>, curiosity,
            <br className="hidden sm:block" />
            and a lifelong love for <span className="text-green-600">learning</span>
          </h1>
          <p className="text-gray-600 mt-6 text-base sm:text-lg">
            Learn from top instructors and gain knowledge that stands the test of time.
          </p>
          <button className="bg-green-600 text-white px-8 py-3.5 mt-6 rounded-full hover:bg-green-700 transition duration-300 shadow-md text-sm md:text-base">
            Start a course
          </button>
        </div>

        {/* Right Image Section */}
        <div className="mt-12 lg:mt-0 relative flex justify-center items-center">
          <div className="relative lg:max-w-[80%] mx-auto">
            <img
              src={HeroRight}
              alt="Learning Banner"
              className="w-full object-contain drop-shadow-xl"
            />

            {/* Floating Small Images */}
            <img
              src={YellowCircular}
              alt="Curved Green Arrow"
              className="absolute bottom-5 right-10 w-20 animate-rotate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrHeroSection;
