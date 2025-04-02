import React, { useState } from 'react';
import { Star, Search, MoreHorizontal } from 'lucide-react';

const CourseCard = ({ image, instructor, instructorImage, title, progress, rating }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden hover:border-green-500 transition-colors duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200">
          <MoreHorizontal size={20} />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img 
            src={instructorImage} 
            alt={instructor} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-sm">{instructor}</p>
            <p className="text-xs text-gray-500">Instructor</p>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{title}</h3>
        
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
            <span>{progress} Complete</span>
            <span>Your rating</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-600 h-2.5 rounded-full" 
              style={{ width: `${progress}` }}
            ></div>
          </div>
        </div>
        
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <Star 
              key={index} 
              className={`${index < rating ? 'fill-current' : 'stroke-current'}`} 
              size={20} 
              strokeWidth={1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CourseDashboard = () => {
  const [activeTab, setActiveTab] = useState('All Courses');
  
  const courses = [
    {
      image: "https://picsum.photos/400/300?random=1",
      instructor: "Jason Williams",
      instructorImage: "https://picsum.photos/50/50?random=2",
      title: "Data Science and Machine Learning with Python - Hands On!",
      progress: "25%",
      rating: 4
    },
    {
      image: "https://picsum.photos/400/300?random=3",
      instructor: "Pamela Foster",
      instructorImage: "https://picsum.photos/50/50?random=4",
      title: "Create Amazing Color Schemes for Your UX Design Projects",
      progress: "80%",
      rating: 5
    },
    {
      image: "https://picsum.photos/400/300?random=5",
      instructor: "Rose Simmons",
      instructorImage: "https://picsum.photos/50/50?random=6",
      title: "Culture & Leadership: Strategies for a Successful Business",
      progress: "15%",
      rating: 4
    },
    {
      image: "https://picsum.photos/400/300?random=7",
      instructor: "Michael Chen",
      instructorImage: "https://picsum.photos/50/50?random=8",
      title: "Advanced React and Redux Development Masterclass",
      progress: "60%",
      rating: 4
    },
    {
      image: "https://picsum.photos/400/300?random=9",
      instructor: "Sarah Thompson",
      instructorImage: "https://picsum.photos/50/50?random=10",
      title: "Digital Marketing Strategy for Startup Growth",
      progress: "40%",
      rating: 3
    },
    {
      image: "https://picsum.photos/400/300?random=11",
      instructor: "David Rodriguez",
      instructorImage: "https://picsum.photos/50/50?random=12",
      title: "Blockchain and Cryptocurrency Fundamentals",
      progress: "55%",
      rating: 5
    }
  ];

  const tabs = ['All Courses', 'Collections', 'Wishlist', 'Archived'];

  return (
    <div className="px-24 py-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === tab 
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search here" 
            className="border rounded-lg pl-4 pr-10 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <Search 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
            size={20} 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <CourseCard 
            key={index}
            {...course}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseDashboard;