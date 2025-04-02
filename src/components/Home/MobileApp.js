import React from 'react';
import GooglePlay from "../assets/images/GooglePlay.webp";
import AppleIcon from "../assets/images/ApplePlayStore.webp";

const MobileAppDownload = () => {
  const handleGooglePlayDownload = () => {
    window.open('https://play.google.com/store', '_blank');
  };

  const handleAppStoreDownload = () => {
    window.open('https://www.apple.com/app-store', '_blank');
  };

  return (
    <div className="relative bg-green-600 text-white py-12 px-4 overflow-hidden">
      {/* Curvy Background Lines */}
      <svg 
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <path 
          fill="#FFFFFF" 
          fillOpacity="0.2"
          d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,154.7C672,139,768,117,864,122.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg 
        className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
      >
        <path 
          fill="#FFFFFF" 
          fillOpacity="0.3"
          d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,240C672,256,768,256,864,229.3C960,203,1056,149,1152,138.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-left mb-6 md:mb-0 md:mr-8">
          <p className="text-sm font-medium mb-2">Ready to start?</p>
          <h2 className="text-3xl font-bold leading-tight">
            Download our mobile app
            <br />
            for easy to start your course.
          </h2>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={handleGooglePlayDownload}
            className="bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img 
              src={GooglePlay} 
              alt="Google Play" 
              className="w-56 h-20 object-cover"
            />
          </button>

          <button 
            onClick={handleAppStoreDownload}
            className="bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img 
              src={AppleIcon}
              alt="App Store" 
              className="w-56 h-20 object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDownload;