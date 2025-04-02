import React from 'react';

const LatestNewsSection = () => {
  return (
    <section className="relative w-full px-16 py-48 mt-16 bg-amber-50 overflow-hidden rounded-lg">
      {/* Green wave element (top left) - floating */}
      <div className="absolute top-16 left-16 animate-float">
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20C10 10 15 30 25 20C35 10 40 30 50 20C60 10 65 30 75 20C85 10 90 30 100 20" 
                stroke="#2DD4BF" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Yellow dots pattern (bottom left) - floating slower */}
      <div className="absolute bottom-16 left-16 animate-float-slow">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="4" fill="#FCD34D" />
          <circle cx="10" cy="25" r="4" fill="#FCD34D" />
          <circle cx="10" cy="40" r="4" fill="#FCD34D" />
          <circle cx="10" cy="55" r="4" fill="#FCD34D" />
          <circle cx="10" cy="70" r="4" fill="#FCD34D" />

          <circle cx="25" cy="10" r="4" fill="#FCD34D" />
          <circle cx="25" cy="25" r="4" fill="#FCD34D" />
          <circle cx="25" cy="40" r="4" fill="#FCD34D" />
          <circle cx="25" cy="55" r="4" fill="#FCD34D" />
          <circle cx="25" cy="70" r="4" fill="#FCD34D" />

          <circle cx="40" cy="10" r="4" fill="#FCD34D" />
          <circle cx="40" cy="25" r="4" fill="#FCD34D" />
          <circle cx="40" cy="40" r="4" fill="#FCD34D" />
          <circle cx="40" cy="55" r="4" fill="#FCD34D" />

          <circle cx="55" cy="10" r="4" fill="#FCD34D" />
          <circle cx="55" cy="25" r="4" fill="#FCD34D" />
          <circle cx="55" cy="40" r="4" fill="#FCD34D" />
        </svg>
      </div>

      {/* Curved yellow line (top right) - floating */}
      <div className="absolute top-0 right-0 animate-float-slow">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C100 55.23 55.23 100 0 100" stroke="#FCD34D" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Purple lines (bottom right) - floating */}
      <div className="absolute bottom-16 right-16 animate-float">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80" x2="80" y2="0" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
          <line x1="20" y1="80" x2="80" y2="20" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
          <line x1="40" y1="80" x2="80" y2="40" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
          <line x1="60" y1="80" x2="80" y2="60" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 mt-14">
          Latest News
        </h1>
        
        <div className="flex items-center justify-center space-x-2 text-gray-600">
          <a href="/" className="hover:text-gray-900 transition duration-300">Home</a>
          <span>•</span>
          <a href="/blog" className="hover:text-gray-900 transition duration-300">Blog</a>
        </div>
      </div>

      {/* Adding custom animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes floatSlow {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default LatestNewsSection;