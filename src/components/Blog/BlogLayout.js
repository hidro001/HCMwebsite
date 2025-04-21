import React from 'react';
import Banner1 from "../../assets/images/Banner1.webp";
import Banner2 from "../../assets/images/Banner2.webp";
import Banner3 from "../../assets/images/Banner3.webp";
import Banner4 from "../../assets/images/Banner4.webp";
import Banner5 from "../../assets/images/Banner5.webp";
import Banner6 from "../../assets/images/Banner6.webp";



const BlogLayout = () => {
  // Featured post data
  const featuredPost = {
    category: "Lifestyle",
    subCategory: "Trend",
    image: "../assets/images/Banner5.webp", // Replace with your actual image path
    title: "Of acceptance insipidity remarkably is invitation",
    author: "William Lewis",
    timePosted: "2 weeks ago",
    readTime: "2 Min Read",
    comments: 0,
    views: 3,
    backgroundColor: "bg-blue-100"
  };
  
  // Related posts data
  const relatedPosts = [
    {
      id: 1,
      image: "../assets/images/Banner1.webp", // Fixed image path
      title: "Together happy feelings continue juvenile one had",
      views: 0,
      backgroundColor: "bg-blue-100"
    },
    {
      id: 2,
      image: "../assets/images/Banner2.webp", // Fixed image path
      title: "Uneasy no settle when nature narrow in afraid",
      views: 3,
      backgroundColor: "bg-pink-100"
    },
    {
      id: 3,
      image: "../assets/images/Banner3.webp", // Fixed image path
      title: "Style begin mr heard by in music tried do",
      views: 6,
      backgroundColor: "bg-yellow-100"
    },
    {
      id: 4,
      image: "../assets/images/Banner4.webp", // Fixed image path
      title: "Insipidity sufficient dispatched any reasonably led ask",
      views: 9,
      backgroundColor: "bg-red-900"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 select-none">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Blog Post</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main featured post */}
        <div className={`${featuredPost.backgroundColor} rounded-lg overflow-hidden flex-grow lg:w-3/4`}>
          <div className="flex flex-col md:flex-row h-full">
            {/* Left side - Categories and Image */}
            <div className="w-full md:w-1/2 relative p-6">
              {/* Categories */}
              <div className="absolute top-6 left-6 flex flex-col items-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-blue-500 text-sm font-medium transform -rotate-90 origin-center whitespace-nowrap">
                    {featuredPost.category}
                  </span>
                </div>
                <div className="h-6"></div>
                <div className="flex flex-col items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                  <span className="text-gray-500 text-sm font-medium transform -rotate-90 origin-center whitespace-nowrap">
                    {featuredPost.subCategory}
                  </span>
                </div>
              </div>
              
              {/* Main cartoon image */}
              <div className="flex justify-center items-center h-full">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="max-h-96 object-contain"
                />
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              {/* Author section */}
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                  <img 
                    src="/images/author-avatar.jpg" // Author avatar image
                    alt={featuredPost.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{featuredPost.author}</p>
                  <p className="text-sm text-gray-600">{featuredPost.timePosted}</p>
                </div>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl font-bold text-gray-700 mb-6 leading-tight">
                {featuredPost.title}
              </h1>
              
              {/* Stats line */}
              <div className="text-sm text-gray-600">
                {featuredPost.comments} Comments • {featuredPost.readTime} • {featuredPost.views} Views
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar with related posts */}
        <div className="lg:w-1/4">
          {relatedPosts.map((post) => (
            <div key={post.id} className="flex items-center gap-4 mb-6">
              {/* Post thumbnail */}
              <div className={`${post.backgroundColor} w-24 h-24 rounded-lg overflow-hidden flex-shrink-0`}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Post title and views */}
              <div className="flex-grow">
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {post.views} Views
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;