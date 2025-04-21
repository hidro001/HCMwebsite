import React from "react";

// Correct way to import images in React
import HeroRight from "../../assets/images/HeroLeft.webp";
import YellowCircular from "../../assets/images/CircularShape.webp";
import "../../styles/animations.css";

const HrHeroSection = () => {
  return (
    <section className="bg-green-50 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 relative overflow-hidden mt-16 select-none px-4 md:px-16">
      {/* Yellow Curved Image */}
      <div className="absolute top-2 left-2 md:top-10 md:left-10 w-14 h-16 md:w-28 md:h-24 z-10">
        <img
          src={YellowCircular}
          alt="Curved Yellow Arrow"
          className="w-full h-full object-contain animate-rotate"
        />
      </div>

      {/* Green Curved Image */}
      <div className="absolute bottom-2 right-2 md:bottom-10 md:right-10 w-14 h-16 md:w-28 md:h-32 z-10">
        <img
          src={YellowCircular}
          alt="Curved Green Arrow"
          className="w-full h-full object-contain animate-rotate"
        />
      </div>

      {/* Left Content Section */}
      <div className="w-full md:w-[50%] text-center md:text-left px-4 md:px-10 py-16 md:py-36">
        <p className="text-green-600 font-semibold text-xl md:text-2xl">
          Start your favorite course
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-relaxed">
          Teaching beyond books
          <br className="hidden sm:block" />
          building <span className="text-green-600">confidence</span>, curiosity, 
          <br className="hidden sm:block" />
          and a lifelong love for <span className="text-green-600">learning</span>
        </h1>
        <p className="text-gray-600 mt-3 text-base md:text-lg">
          Learn from top instructors and gain knowledge that stands the test of time.
        </p>
        <button className="bg-green-600 text-white px-5 py-2.5 mt-6 rounded-lg hover:bg-green-700 transition duration-300 shadow-md text-sm md:text-base">
          Start a course
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-[50%] flex justify-center items-center">
        <img
          src={HeroRight}
          alt="Learning Banner"
          className="w-full max-w-[500px] md:w-[70%] object-contain"
        />
      </div>
    </section>
  );
};

export default HrHeroSection;