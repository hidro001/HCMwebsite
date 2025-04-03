import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeroRight from "../../assets/images/HeroLeft.webp";
import YellowCircular from "../../assets/images/CircularShape.webp";
import heroImage from "../../assets/images/HeroLeft.webp";
import crownIcon from "../../assets/images/Crown.svg";
import "../../styles/animations.css";

const FaqsHeroSection = () => {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloating((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#E6F2FB] pt-16 sm:pt-36">
      <div className="container mx-auto flex flex-col lg:flex-row text-gray-800">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mt-14">
          <div>
            <img
              src={crownIcon}
              alt="Crown"
              className="h-14"
            />
          </div>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Ready to shape a future full of possibilities?
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-[55px] font-bold mt-2" style={{ lineHeight: "1.3" }}>
            Teaching beyond books<br className="hidden sm:block" />
            building <span className="text-blue-600">confidence</span>, curiosity, <br className="hidden sm:block" />
            and a lifelong love for <span className="text-blue-600">learning</span>
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg">
            Master skills, ace exams, and build lifelong confidence with expert-led courses in{" "}
            <span className="font-semibold">
              Math, SAT Prep, Math Kangaroo, ELA, and Public Speaking!
            </span>
          </p>
          {/* Buttons */}
          <div className="mt-6 flex sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
            <Link
              to="/book-demo"
              className="flex items-center gap-2 font-semibold bg-blue-600 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition duration-300"
            >
              Book a demo
            </Link>
            <button className="flex items-center gap-2 font-semibold border border-blue-600 px-6 py-3 rounded-full text-blue-600 hover:bg-blue-700 hover:text-white transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3l14 9-14 9V3z"
                />
              </svg>
              Watch Our Video
            </button>
          </div>
        </div>

        {/* Right Image with Floating Elements */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
          <div className="relative w-[90%] mx-auto">
            {/* Main Hero Image */}
            <img
              src={heroImage}
              alt="Hero"
              className="w-full object-cover drop-shadow-xl"
            />

            {/* Floating Small Images */}
            <img
              src="https://wpocean.com/html/tf/eduko/assets/images/shape/vector-1.svg"
              alt=""
              className="absolute top-0 left-0 w-16 float"
            />
            <img
              src="https://wpocean.com/html/tf/eduko/assets/images/shape/vector-2.svg"
              alt=""
              className="absolute bottom-5 right-10 w-20 float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsHeroSection;