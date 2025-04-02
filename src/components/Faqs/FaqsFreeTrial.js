import React from "react";
import { Link } from "react-router-dom";
import HeroRight from "../../assets/images/TeamImage.webp";
import "../../styles/animations.css";

const HubSpotPromoSection = () => {
  return (
    <section className="bg-green-50 py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between text-gray-800 select-none relative overflow-hidden">
          {/* Left Content Section */}
          <div className="text-center lg:text-left relative z-10 w-full lg:w-2/5 mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Grow better with HubSpot today
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Take your business to the next level with our powerful, easy-to-use marketing, sales, and service software.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Link
                to="/get-demo"
                className="flex items-center justify-center gap-2 font-semibold bg-orange-500 px-8 py-4 rounded-full text-white hover:bg-orange-600 transition duration-300 min-w-40 sm:min-w-0"
              >
                Get a demo
              </Link>
              <Link
                to="/learn-more"
                className="flex items-center justify-center gap-2 font-semibold border-2 border-orange-500 px-8 py-4 rounded-full text-orange-500 hover:bg-orange-50 transition duration-300 min-w-40 sm:min-w-0"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full lg:w-3/5 flex justify-center items-center">
            <div className="relative w-full flex justify-center">

              {/* Teal Shape */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-0">
                <svg
                  width="100"
                  height="60"
                  viewBox="0 0 80 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24C0 10.745 10.745 0 24 0H80V24C80 37.255 69.255 48 56 48H0V24Z"
                    fill="#0DD3C5"
                  />
                </svg>
              </div>

              {/* Main Image - Fixed to preserve full height */}
              <div className="relative z-10 w-full md:w-4/5 lg:w-full max-w-xl h-full">
                <img
                  src={HeroRight}
                  alt="Professional woman in orange jacket"
                  className="relative w-full h-auto object-contain drop-shadow-xl rounded-lg"
                  style={{ maxHeight: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubSpotPromoSection;