import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PeopleFreeSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set visibility to true after component mounts
  useEffect(() => {
    setIsVisible(true);
    
    // Optional: For fade out effect when navigating away or unmounting
    return () => {
      setIsVisible(false);
    };
  }, []);

  return (
    <div className="w-full px-4 lg:px-40 flex flex-col md:flex-row items-center py-20 bg-white select-none overflow-hidden">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Left Section */}
            <motion.div
              className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1
                className="text-[#2F6E3E] font-bold text-4xl md:text-6xl leading-tight"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Set People<br />
                Free to do<br />
                Great Work
              </h1>
            </motion.div>

            {/* Right Section */}
            <motion.div
              className="w-full md:w-1/2 pl-0 md:pl-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <motion.h2
                className="text-[#2F6E3E] text-xl md:text-2xl font-bold mb-4"
                style={{ fontFamily: "'Poppins', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                People are the key to business success.
              </motion.h2>
              
              <motion.p
                className="mb-4 text-gray-700 text-base md:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Employee experience is at the heart of an organization's success. Business growth and longevity, customer loyalty, employee retention, and engagement—all depend on creating and delivering an exceptional employee experience.
              </motion.p>
              
              <motion.p
                className="text-gray-700 text-base md:text-lg"
                style={{ fontFamily: "'Inter', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                With our cloud-based HR platform, HR pros and leaders can spend more time on people and less time on paperwork. We automate the transactional and help capture the power of people data to boost strategic HR impact and create a thriving work environment.
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PeopleFreeSection;