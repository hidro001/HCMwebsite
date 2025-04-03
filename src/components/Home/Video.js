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
    setRightElements(rightSideElements); // ✅ FIX: No duplication of left elements
  }, []);

  return (
    <section className="py-12 bg-gray-50 select-none relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Product Demo</h2>
        <div className="relative flex justify-center">
          {/* Floating Elements */}
          {[...leftElements, ...rightElements].map((element, index) => (
            <div
              key={index}
              className="absolute floating-element opacity-90 text-lg flex items-center justify-center transition-all duration-1000 bg-white bg-opacity-90 rounded-full shadow-md p-2"
              style={{
                width: "70px",
                height: "70px",
                top: `${element.top}%`,
                left: element.left !== undefined ? `${element.left}%` : "auto",
                right: element.right !== undefined ? `${element.right}%` : "auto",
                zIndex: 5
              }}
            >
              <div className="text-center">
                <div className="text-xl">{element.icon}</div>
                <div className="text-xs font-semibold text-blue-600 mt-1">{element.label}</div>
              </div>
            </div>
          ))}

          {/* Video Component */}
          <div className="relative z-10" style={{ width: "70%" }}>
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
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Watch our product demo to see how our HR solution can transform your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
