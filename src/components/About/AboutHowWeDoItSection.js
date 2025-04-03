import React from 'react';
import Team from "../../assets/images/TeamImage.webp";
import { motion } from "framer-motion";
import { Lightbulb, Award, Rocket } from "lucide-react";

const HowWeDoItSection = () => {
  const approaches = [
    {
      title: 'Dream',
      description: 'We see the dreams through our customers eyes and work with intelligence, tech, and passion to make them come true.',
      icon: Lightbulb
    },
    {
      title: 'Be Fearless',
      description: 'We act on our intuition, make bold moves, and eat fear for breakfast.',
      icon: Award
    },
    {
      title: 'Become Intrapreneurs',
      description: 'We take ownership of our projects, regularly rewrite processes, challenge conceptions, and are idea labs on the move.',
      icon: Rocket
    }
  ];

  return (
    <section className="w-full flex flex-col md:flex-row items-center py-20 bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl overflow-hidden px-12 select-none">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        <div className="relative w-[80%] max-w-[500px] flex items-center justify-center">
          {/* Purple Glow Circles - Same color as dots next to titles */}
          <div className="absolute -top-12 -left-12 w-36 h-36 bg-purple-500 opacity-40 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-purple-500 opacity-40 rounded-full blur-2xl"></div>

          {/* Team Image */}
          <img
            src={Team}
            alt="Our Team"
            className="relative w-full h-auto rounded-xl"
          />
        </div>
      </div>

      {/* Right Section - Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full md:w-1/2 flex flex-col items-center text-center"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 mb-8 relative inline-block">
          How We Do It
          <span className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-400"></span>
        </h2>

        {approaches.map((approach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-6 text-left w-full max-w-lg bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start">
              <div className="mr-4 mt-1">
                {/* Icon with gradient background using the same purple/yellow colors */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-yellow-400">
                  <approach.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 flex items-center text-gray-800">
                  {approach.title}
                  <span className="ml-2 w-3 h-3 bg-purple-500 rounded-full inline-block"></span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{approach.description}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Yellow accent element to match the title underline */}
        <div className="w-24 h-1 bg-yellow-400 mt-8 rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default HowWeDoItSection;