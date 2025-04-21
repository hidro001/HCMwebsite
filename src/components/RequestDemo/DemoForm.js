import React, { useState } from 'react';
import logo from "../../assets/images/logo.png";
import testimonialImg from "../../assets/images/testimonial.webp"; // ✅ Renamed to avoid conflict

export default function HumanMaximizerDemo() {
  const [formData, setState] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    companyName: '',
    employees: ''
  });

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "\"Human Maximizer helped our managers foster accountability and empathy, creating a collaborative culture while exceeding employee expectations with its intuitive UI and simple dashboards.\"",
      author: "Krishna",
      position: "HRBP"
    },
    {
      text: "\"The platform transformed our HR processes, saving us countless hours each week while providing valuable insights into employee performance and engagement.\"",
      author: "Tanya",
      position: "HR Director"
    },
    {
      text: "\"Setting up was incredibly simple, and the support team has been responsive at every step. Our managers now have more time to focus on developing their teams.\"",
      author: "Priya",
      position: "COO"
    },
    {
      text: "\"The analytics dashboard helps us make data-driven decisions about our workforce, improving our hiring and retention strategies significantly.\"",
      author: "Falak",
      position: "People Operations"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };

  const handlePrevious = () => {
    setActiveTestimonial(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveTestimonial(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex">
      {/* Left side with branding and testimonial */}
      <div className="w-1/2 bg-gray-100 p-12 flex flex-col justify-between select-none">
        <div>
          <div className="mb-4">
            <img src={logo} alt="Human Maximizer logo" className="h-8" />
          </div>

          <div className="mt-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Smart HR to <span className="relative">
                outsmart
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></span>
              </span> the<br />changing world
            </h1>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mt-12 mb-12">
            <p className="text-gray-700 min-h-24">
              {testimonials[activeTestimonial].text}
            </p>

            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-4">
                <button 
                  className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                  onClick={handlePrevious}
                  aria-label="Previous testimonial"
                >
                  <span className="text-2xl">&larr;</span>
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`h-2 w-2 rounded-full transition-all duration-300 focus:outline-none ${
                        index === activeTestimonial 
                          ? 'bg-gray-800 transform scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Testimonial ${index + 1}`}
                      aria-pressed={index === activeTestimonial}
                    />
                  ))}
                </div>

                <button 
                  className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                  onClick={handleNext}
                  aria-label="Next testimonial"
                >
                  <span className="text-2xl">&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center mb-6">
            <div className="mr-4">
              <img src={testimonialImg} alt="Profile" className="rounded-full w-12 h-12" /> {/* ✅ Fixed image */}
            </div>
            <div>
              <p className="font-medium">{testimonials[activeTestimonial].author}</p>
              <p className="text-sm text-gray-600">{testimonials[activeTestimonial].position}</p>
            </div>
          </div> 
        </div>
      </div>

      {/* Right side with form */}
      <div className="w-1/2 p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-right mb-8">
            <p className="text-gray-600">Streamline Global</p>
            <h2 className="text-3xl font-bold">
              HR management
              <span className="block h-1 bg-blue-500 w-36 ml-auto mt-1"></span>
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="workEmail" className="block text-sm font-medium mb-1">
                Work Email*
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">
                Phone Number*
              </label>
              <div className="flex">
                <select className="w-1/3 p-2 border border-gray-300 rounded-l">
                  <option>India (हिन्दी)</option>
                </select>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-2/3 p-2 border border-gray-300 rounded-r"
                  placeholder="+91"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="companyName" className="block text-sm font-medium mb-1">
                Company Name*
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="employees" className="block text-sm font-medium mb-1">
                Number of Employees*
              </label>
              <select
                id="employees"
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Please Select</option>
                <option value="1-50">1-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501+">501+</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
              Get Started
            </button>
          </form>

          

        </div>
      </div>
    </div>
  );
}
