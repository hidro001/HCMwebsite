import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/HeroLeft.webp";
import crownIcon from "../../assets/images/Crown.svg";

const HeroSection = () => {
  // Animation states
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationComplete, setAnimationComplete] = useState({
    text: false,
    image: false,
    floating: false
  });

  // Initialize animations after component mounts
  useEffect(() => {
    // Short delay to ensure smooth transition after page load
    const initialTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Sequence the animations
    const textTimer = setTimeout(() => {
      setAnimationComplete(prev => ({ ...prev, text: true }));
    }, 1200);

    const imageTimer = setTimeout(() => {
      setAnimationComplete(prev => ({ ...prev, image: true }));
    }, 800);

    const floatingTimer = setTimeout(() => {
      setAnimationComplete(prev => ({ ...prev, floating: true }));
    }, 2000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(textTimer);
      clearTimeout(imageTimer);
      clearTimeout(floatingTimer);
    };
  }, []);

  return (
    <section className="bg-[#E6F2FB] pt-16 pb-16 sm:pt-36 select-none overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row text-gray-800">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left mt-14 relative">
          <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <img
              src={crownIcon}
              alt="Crown"
              className="h-14 mx-auto lg:mx-0 animate-pulse"
            />
          </div>
          
          <div className="overflow-hidden">
            <p className={`text-gray-600 mt-4 text-base sm:text-lg transition-all duration-700 delay-300 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
              Ready to shape a future full of possibilities?
            </p>
          </div>
          
          <div className="overflow-hidden">
            <h1 
              className={`text-2xl sm:text-3xl lg:text-[55px] font-bold mt-2 transition-all duration-1000 delay-500 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ lineHeight: "1.3" }}
            >
              Teaching beyond books<br className="hidden sm:block" />
              building <span className={`text-blue-600 ${animationComplete.text ? 'animate-highlight' : ''}`}>confidence</span>, curiosity, <br className="hidden sm:block" />
              and a lifelong love for <span className={`text-blue-600 ${animationComplete.text ? 'animate-highlight delay-150' : ''}`}>learning</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className={`text-gray-600 mt-4 text-base sm:text-lg transition-all duration-700 delay-700 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}>
              Master skills, ace exams, and build lifelong confidence with expert-led courses in{" "}
              <span className={`font-semibold ${animationComplete.text ? 'animate-underline' : ''}`}>
                Math, SAT Prep, Math Kangaroo, ELA, and Public Speaking!
              </span>
            </p>
          </div>
          
          {/* Buttons with staggered appearance */}
          <div className={`mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start transition-all duration-700 delay-900 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link
              to="/book-demo"
              className={`flex items-center gap-2 font-semibold bg-blue-600 px-6 py-3 rounded-full text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 ${animationComplete.text ? 'animate-pulse-subtle' : ''}`}
            >
              Book a demo
            </Link>
            <button className="flex items-center gap-2 font-semibold border border-blue-600 px-6 py-3 rounded-full text-blue-600 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:scale-105 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className={`w-5 h-5 ${animationComplete.text ? 'animate-bounce-gentle' : ''} group-hover:animate-none`}
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

        {/* Right Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative flex justify-center">
          <div className={`relative w-[90%] mx-auto transition-all duration-1200 transform ${isLoaded ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-8'}`}>
            {/* Main Hero Image with subtle entrance */}
            <img
              src={heroImage}
              alt="Hero"
              className={`w-full object-cover drop-shadow-xl transition-all duration-1500 ${animationComplete.image ? 'filter-none' : 'filter brightness-90'}`}
            />

            {/* Floating Small Images with enhanced animation */}
            <img
              src="https://wpocean.com/html/tf/eduko/assets/images/shape/vector-1.svg"
              alt=""
              className={`absolute top-0 left-0 w-16 floating-element transition-all duration-1000 delay-1000 ${animationComplete.floating ? 'opacity-100 float-1' : 'opacity-0 -translate-y-4'}`}
            />
            <img
              src="https://wpocean.com/html/tf/eduko/assets/images/shape/vector-2.svg"
              alt=""
              className={`absolute bottom-5 right-10 w-20 floating-element transition-all duration-1000 delay-1200 ${animationComplete.floating ? 'opacity-100 float-2' : 'opacity-0 translate-y-4'}`}
            />
          </div>
        </div>
      </div>

      {/* Add animation keyframes via style tag */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(8px) rotate(5deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-10px); }
        }
        
        .float-1 {
          animation: float-1 4s ease-in-out infinite;
        }
        
        .float-2 {
          animation: float-2 5s ease-in-out infinite;
        }
        
        .float-3 {
          animation: float-3 6s ease-in-out infinite;
        }
        
        .floating-element:nth-child(odd) {
          animation: float-1 4s ease-in-out infinite;
        }
        
        .floating-element:nth-child(even) {
          animation: float-2 5s ease-in-out infinite;
        }
        
        .floating-element:nth-child(3n) {
          animation: float-3 6s ease-in-out infinite;
        }
        
        @keyframes highlight {
          0% { text-shadow: 0 0 0 rgba(37, 99, 235, 0); }
          50% { text-shadow: 0 0 10px rgba(37, 99, 235, 0.4); }
          100% { text-shadow: 0 0 0 rgba(37, 99, 235, 0); }
        }
        
        .animate-highlight {
          animation: highlight 2s ease-in-out;
        }
        
        @keyframes underline {
          0% { box-shadow: inset 0 -2px 0 rgba(37, 99, 235, 0); }
          50% { box-shadow: inset 0 -2px 0 rgba(37, 99, 235, 1); }
          100% { box-shadow: inset 0 -2px 0 rgba(37, 99, 235, 0.5); }
        }
        
        .animate-underline {
          animation: underline 2.5s ease forwards;
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(3px); }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 0 rgba(37, 99, 235, 0); }
          50% { box-shadow: 0 0 15px rgba(37, 99, 235, 0.4); }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;