import React from 'react';
import { motion } from 'framer-motion';

const PeopleFreeSection = () => {
  return (
    <div className="w-full px-40 flex flex-col md:flex-row items-center py-20 bg-white select-none">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 pr-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-[#2F6E3E] font-bold text-6xl leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Set People<br />
          Free to do<br />
          Great Work
        </h1>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 pl-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2
          className="text-[#2F6E3E] text-2xl font-bold mb-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          People are the key to business success.
        </h2>
        <p
          className="mb-4 text-gray-700 text-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Employee experience is at the heart of an organization's success. Business growth and longevity, customer loyalty, employee retention, and engagement—all depend on creating and delivering an exceptional employee experience.
        </p>
        <p
          className="text-gray-700 text-lg"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          With our cloud-based HR platform, HR pros and leaders can spend more time on people and less time on paperwork. We automate the transactional and help capture the power of people data to boost strategic HR impact and create a thriving work environment.
        </p>
      </motion.div>
    </div>
  );
};

export default PeopleFreeSection;