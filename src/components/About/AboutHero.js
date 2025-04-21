import React from 'react';
import FirstImage from "../../assets/images/Payroll.webp";
import SecondImage from "../../assets/images/HrImage.webp";
import ThirdImage from "../../assets/images/AboutPayroll.webp";
import FourthImage from "../../assets/images/AboutPayroll.webp";

const AboutUsHero = () => {
  return (
    <div className="flex relative overflow-hidden bg-gradient-to-r from-white to-blue-50 select-none w-full h-[120vh]">

      {/* Left content area */}
      <div className="container mx-auto px-6 py-16 md:py-24 flex-col md:flex-row p-20 mt-36 rounded-lg flex items-center justify-between">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            The Smarter Way <br />
            to Payroll <span className="text-green-500 border-b-4 border-green-500">Human Maximizer</span>
          </h1>
          
          <p className="text-gray-600 mb-10 max-w-lg">
            Mauris malesuada enim eget blandit gravida. Duis hendrerit cursus turpis, id mollis est rutrum nec. Sed interdum nisi id libero tincidunt, sit amet vestibulum tortor porttitor. Cras ligula lacus, ullamcorper sed
          </p>
          
          {/* Search bar */}
          
        </div>
        
        {/* Right area with images */}
        <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
          {/* Main center image */}
          <div className="absolute left-0 md:left-10 top-0 w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={FirstImage} alt="Teacher with student" className="w-full h-full object-cover" />
          </div>
          
          {/* Bottom left image */}
          <div className="absolute left-10 bottom-10 w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={SecondImage} alt="Mother with daughter" className="w-full h-full object-cover" />
          </div>
          
          {/* Right image */}
          <div className="absolute right-0 top-20 w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={ThirdImage} alt="Students learning" className="w-full h-full object-cover" />
          </div>
          
          {/* Bottom right image */}
          <div className="absolute right-10 bottom-0 w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img src={FourthImage} alt="Child learning" className="w-full h-full object-cover" />
          </div>
          
          {/* Decorative circles */}
          <div className="absolute right-0 top-0 w-16 h-16 md:w-32 md:h-32 rounded-full bg-orange-500 opacity-80"></div>
          <div className="absolute left-24 top-24 w-10 h-10 md:w-16 md:h-16 rounded-full bg-orange-400 opacity-80"></div>
          <div className="absolute right-36 top-48 w-8 h-8 md:w-12 md:h-12 rounded-full bg-yellow-400 opacity-80"></div>
          <div className="absolute left-48 bottom-12 w-12 h-12 md:w-20 md:h-20 rounded-full bg-yellow-400 opacity-80"></div>
        </div>
      </div>
      
      {/* Background text */}
      <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-gray-100 text-opacity-10">
        <span className="text-[200px] font-bold">Strategy</span>
      </div>
    </div>
  );
};

export default AboutUsHero;