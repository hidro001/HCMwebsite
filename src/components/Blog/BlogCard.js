import React from 'react';

const ImageCardGrid = () => {
  const cards = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Songs in oh other avoid it hours woman",
      category: "Lifestyle",
      readTime: "2 Min Read",
      views: "3 Views",
      author: "William Lewis",
      timePosted: "2 weeks ago",
      backgroundColor: "bg-blue-100"
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Astonished and acceptance men two discretion",
      category: "Art & Design",
      readTime: "2 Min Read",
      views: "5 Views",
      author: "William Lewis",
      timePosted: "2 weeks ago",
      backgroundColor: "bg-amber-100"
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Everything travelling set how law literature",
      category: "Art & Design Beauty",
      readTime: "2 Min Read",
      views: "2 Views",
      author: "William Lewis",
      timePosted: "2 weeks ago",
      backgroundColor: "bg-purple-100"
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "Collecting themselves resources sufficient",
      category: "Health",
      readTime: "3 Min Read",
      views: "8 Views",
      author: "William Lewis",
      timePosted: "3 weeks ago",
      backgroundColor: "bg-green-100"
    },
    {
      id: 5,
      image: "/api/placeholder/400/300",
      title: "Mindfulness practice three essential steps",
      category: "Wellness",
      readTime: "4 Min Read",
      views: "12 Views",
      author: "William Lewis",
      timePosted: "1 week ago",
      backgroundColor: "bg-rose-100"
    },
    {
      id: 6,
      image: "/api/placeholder/400/300",
      title: "Breathing techniques from ancient traditions",
      category: "Meditation",
      readTime: "5 Min Read",
      views: "7 Views",
      author: "William Lewis",
      timePosted: "4 weeks ago",
      backgroundColor: "bg-indigo-100"
    }
  ];

  return (
    <div className="w-full pb-20 px-16 mt-14">
      <div className="mx-auto pb-12 select-none">
        <h1 className="text-center text-4xl font-bold">
          <span className="text-black mr-2">Trending</span>
          <span className="text-blue-600 mr-4">Articles</span>
          <span className="text-black">For</span>
          <br className="sm:hidden" />
          <span className="text-black mt-2 block">
            Your Reading Pleasure
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className={`rounded-lg overflow-hidden flex flex-col ${card.backgroundColor} shadow-sm hover:shadow-md transition-shadow duration-300`}
          >
            {/* Main content area */}
            <div className="p-6 flex flex-col flex-grow relative">
              {/* Category label in corner */}
              <div className="absolute top-4 right-4 text-sm text-gray-600 font-medium">
                {card.category}
              </div>
              
              {/* Image centered */}
              <div className="flex justify-center items-center mb-8 mt-8">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="h-48 object-contain"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {card.title}
              </h3>
              
              {/* Stats line */}
              <div className="text-sm text-gray-600 mb-4">
                0 Comments • {card.readTime} • {card.views}
              </div>
            </div>
            
            {/* Author section */}
            <div className="p-4 border-t border-gray-200 bg-white bg-opacity-30">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                  <img 
                    src="/api/placeholder/40/40" 
                    alt={card.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{card.author}</p>
                  <p className="text-sm text-gray-600">{card.timePosted}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCardGrid;