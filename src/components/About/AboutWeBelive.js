import React from "react";
import circle from "../../assets/images/Circle.webp";

const WeBelieveSection = () => {
  // Core values data for easier maintenance
  const coreValues = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Innovative Learning",
      description:
        "We believe in embracing new technologies and teaching methods to create engaging and effective learning experiences.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Inclusive Education",
      description:
        "Education should be accessible to everyone regardless of background, learning style, or individual needs.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Lifelong Growth",
      description:
        "Learning is a continuous journey that extends beyond the classroom and throughout all stages of life.",
    },
  ];

  return (
    <section
      aria-labelledby="we-believe-heading"
      className="py-10 sm:py-14 md:py-16 lg:py-20 bg-blue-50 relative overflow-hidden select-none"
    >
      {/* Decorative Elements - Responsive sizing and positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://wpocean.com/html/tf/eduko/assets/images/shape/vector-11.svg"
          alt=""
          className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 lg:w-48 opacity-75"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-blue-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-30"
          aria-hidden="true"
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header - Responsive typography */}
        <header className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-blue-600 font-semibold text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
            Our Philosophy
          </p>
          <h2
            id="we-believe-heading"
            className="text-gray-800 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug"
          >
            What We
            <span className="relative inline-block mx-2">
              <span className="relative z-10">Believe</span>
              <img
                src={circle}
                alt=""
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-10 sm:h-12 md:h-16 z-0 rotate-3"
                aria-hidden="true"
              />
            </span>
            In
          </h2>
        </header>

        {/* Core Values Section - Responsive grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <article
                key={index}
                className="bg-white shadow-lg px-4 sm:px-5 md:px-6 py-8 sm:py-9 md:py-10 rounded-xl transition-transform duration-300 hover:scale-105 flex flex-col items-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                  {value.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center text-xs sm:text-sm md:text-base">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeBelieveSection;