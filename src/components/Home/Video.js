import React, { useState, useEffect } from "react";
import VideoComponent from "./VideoComponent";
import Thumbnail from "../../assets/images/Thumbnail.webp";

const VideoSection = () => {
  const [leftElements, setLeftElements] = useState([]);
  const [rightElements, setRightElements] = useState([]);

  const managementElements = [
    { icon: "💰", label: "Finance Management" },
    { icon: "💵", label: "Payroll Management" },
    { icon: "✅", label: "Task Management" },
    { icon: "🕒", label: "Attendance Management" },
    { icon: "🗓️", label: "Leave Management" },
    { icon: "🤝", label: "Synergy" },
    { icon: "🎫", label: "Ticket Management" },
    { icon: "🔍", label: "Organization Chart" },
    { icon: "📄", label: "Policies & Induction" },
    { icon: "👋", label: "Resignation & F&F" }
  ];

  useEffect(() => {
    const leftPositions = [
      { top: 15, left: 2 },
      { top: 35, left: 10 },
      { top: 55, left: 5 },
      { top: 75, left: 10 },
      { top: 90, left: 2 }
    ];

    const rightPositions = [
      { top: 15, right: 2 },
      { top: 35, right: 10 },
      { top: 55, right: 5 },
      { top: 75, right: 10 },
      { top: 90, right: 2 }
    ];

    const leftSideElements = managementElements.slice(0, 5).map((element, index) => ({
      ...element,
      top: leftPositions[index].top,
      left: leftPositions[index].left
    }));

    const rightSideElements = managementElements.slice(5).map((element, index) => ({
      ...element,
      top: rightPositions[index].top,
      right: rightPositions[index].right
    }));

    setLeftElements(leftSideElements);
    setRightElements(rightSideElements);
  }, []);

  return (
    <section className="py-12 bg-gray-50 select-none relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Product Demo</h2>

        {/* Desktop/Tablet View */}
        <div className="hidden sm:flex relative justify-center">
          {[...leftElements, ...rightElements].map((element, index) => (
            <div
              key={index}
              className="absolute text-lg flex items-center justify-center bg-white bg-opacity-90 rounded-full shadow-md p-2 w-[90px] h-[90px] transition-all duration-1000 z-10"
              style={{
                top: `${element.top}%`,
                left: element.left !== undefined ? `${element.left}%` : "auto",
                right: element.right !== undefined ? `${element.right}%` : "auto"
              }}
            >
              <div className="text-center">
                <div className="text-2xl">{element.icon}</div>
                <div className="text-xs font-semibold text-blue-600 mt-1">
                  {element.label}
                </div>
              </div>
            </div>
          ))}

          <div className="relative z-10 w-[70%]">
            <VideoComponent
              videoSrc="https://media.w3.org/2010/05/sintel/trailer.mp4"
              thumbnailSrc={Thumbnail}
              playButton={
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-white text-3xl">▶</span>
                </div>
              }
            />
          </div>
        </div>

        {/* Mobile View: Stack Bubbles Below Video */}
        <div className="sm:hidden flex flex-col items-center gap-4">
          <div className="w-full">
            <VideoComponent
              videoSrc="https://media.w3.org/2010/05/sintel/trailer.mp4"
              thumbnailSrc={Thumbnail}
              playButton={
                <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center">
                  <span className="text-white text-2xl">▶</span>
                </div>
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 px-2">
            {managementElements.map((element, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 rounded-full shadow-md p-3 flex flex-col items-center justify-center w-[80px] h-[80px]"
              >
                <div className="text-xl">{element.icon}</div>
                <div className="text-[10px] text-center font-medium text-blue-600 mt-1 leading-tight">
                  {element.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 px-4">
          <p className="text-gray-600 text-sm sm:text-base">
            Watch our product demo to see how our HR solution can transform your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
