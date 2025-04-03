import React, { useEffect, useState, useRef } from "react";
import MobileApp from "../../assets/images/MobileApp.webp";

const HRManagementApp = () => {
  const [isVisible, setIsVisible] = useState({
    image: false,
    title: false,
    features: Array(6).fill(false)
  });
  
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    // Set up the intersection observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.target === titleRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, title: true }));
        } else if (entry.target === imageRef.current && entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, image: true }));
        } else {
          // Check if the entry is one of our feature divs
          const featureIndex = featureRefs.current.findIndex(ref => ref === entry.target);
          if (featureIndex !== -1 && entry.isIntersecting) {
            setIsVisible(prev => {
              const newFeatures = [...prev.features];
              newFeatures[featureIndex] = true;
              return { ...prev, features: newFeatures };
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe the title, image, and all feature divs
    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    featureRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Create feature data
  const features = [
    {
      title: "Simplified leave & attendance",
      description:
        "Let employees clock in or take leave- remotely, on field or in-office. Embrace self-accountability.",
    },
    {
      title: "Tax and Expense - in 2 Clicks",
      description:
        "Let employees manage tax declarations and proofs. File and update expenses in 2 clicks.",
    },
    {
      title: "A Culture of Recognition",
      description:
        "Give and Receive Praises to build a culture of recognition. Take a moment to take it in.",
    },
    {
      title: "Approvals from a single window",
      description:
        "Enable managers to approve or reject requests from a single window",
    },
    {
      title: "Adaptable to employee preferences",
      description:
        "Each employee can find their preferred features on the main screen",
    },
    {
      title: "Faster resolution of employee issues",
      description:
        "A reliable help-desk with super-easy process for raising and resolving issues",
    },
  ];

  return (
    <div className="min-h-screen pb-20 px-4 md:px-20 lg:px-40 select-none" ref={sectionRef}>
      <div 
        className="mx-auto pb-12 select-none"
        ref={titleRef}
      >
        <h1 
          className={`text-center text-4xl font-bold transition-all duration-1000 ${
            isVisible.title 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform -translate-y-10'
          }`}
        >
          Employees Data Card
        </h1>
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Image Section with animation */}
          <div 
            className={`flex justify-center items-center transition-all duration-1000 ${
              isVisible.image 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-20'
            }`}
            ref={imageRef}
          >
            <img
              src={MobileApp}
              alt="HR Management App"
              className="w-full max-w-xs rounded-lg object-cover"
            />
          </div>

          {/* Features List with animations */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-md transition-all duration-700 ${
                  isVisible.features[index]
                    ? 'opacity-100 transform translate-y-0'
                    : 'opacity-0 transform translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                ref={el => featureRefs.current[index] = el}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRManagementApp;