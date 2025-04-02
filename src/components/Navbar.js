import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaQuestionCircle } from "react-icons/fa";
import logo from "../assets/images/logo.png"; // Adjust the path if needed
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [featureOpen, setFeatureOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const featureRef = useRef(null);
  const resourcesRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (featureRef.current && !featureRef.current.contains(event.target)) {
        setFeatureOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown menus when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // On mobile, keep menu state but close dropdowns
        setFeatureOpen(false);
        setResourcesOpen(false);
      } else {
        // On desktop, close mobile menu
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 sm:px-40 py-6 shadow-md text-[#116B9E] bg-white select-none">
      <div className="flex items-center">
        <img src={logo} alt="greyt HR Logo" onClick={() => navigate("/")} className="h-8 sm:h-10 w-auto mr-4 sm:mr-12 cursor-pointer" />
      </div>

      <button
        className="md:hidden text-[#116B9E] text-lg p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div
        className={`${menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:w-auto md:flex-grow items-start md:items-center space-y-4 md:space-y-0 md:space-x-6 pt-4 md:pt-0 pb-4 md:pb-0 mt-4 md:mt-0 border-t md:border-t-0 border-gray-200 md:border-transparent`}
      >
        <div className="relative w-full md:w-auto" ref={featureRef}>
          <button
            className="flex w-full md:w-auto items-center justify-between md:justify-start md:space-x-1 hover:text-[#B2D469] text-lg font-medium text-[#116B9E] transition duration-300 py-2 md:py-0"
            onClick={() => {
              setFeatureOpen(!featureOpen);
              setResourcesOpen(false);
            }}
            aria-expanded={featureOpen}
          >
            <span>Features</span>
            <FaChevronDown className={`ml-1 transition-transform duration-300 ${featureOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {featureOpen && (
            <div className="absolute left-0 mt-2 w-full md:w-[800px] max-w-[96vw] bg-white shadow-lg rounded-md p-4 md:p-6 text-black overflow-auto max-h-[80vh] md:max-h-[600px] z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <h3 className="font-semibold text-base mb-4">Product</h3>
                  <ul className="space-y-3">
                    <li onClick={() => navigate("/HrSoftware")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#116B9E] mr-2">👤</span>
                      <span>HR Software</span>
                    </li>
                    <li onClick={() => navigate("/PayrollSoftware")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#B2D469] mr-2">💰</span>
                      <span>Payroll Software</span>
                    </li>
                    <li onClick={() => navigate("/LeaveManagement")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#116B9E] mr-2">🌴</span>
                      <span>Leave Management</span>
                    </li>
                    <li onClick={() => navigate("/AttendanceManagement")} className="flex items-center hover:bg-gray-100 p-2 rounded bg-purple-50">
                      <span className="text-[#B2D469] mr-2">⏰</span>
                      <span>Attendance Management</span>
                    </li>
                    <li onClick={() => navigate("/PerformanceManagement")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#116B9E] mr-2">📊</span>
                      <span>Performance Management</span>
                    </li>
                    <li onClick={() => navigate("/EmployeeSelfService")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#B2D469] mr-2">👥</span>
                      <span>Employee Self Service</span>
                    </li>
                    <li onClick={() => navigate("/EmployeeEngagement")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#116B9E] mr-2">📣</span>
                      <span>Employee Engagement</span>
                    </li>
                    <li onClick={() => navigate("/UniteMarketplace")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#B2D469] mr-2">🔄</span>
                      <span>Unite Marketplace</span>
                    </li>
                    <li onClick={() => navigate("/RecruitmentSoftware")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#116B9E] mr-2">🔍</span>
                      <span>Recruitment Software</span>
                    </li>
                  </ul>
                </div>

                <div className="col-span-1">
                  <h3 className="font-semibold text-base mb-4">For Industry</h3>
                  <ul className="space-y-3">
                    <li onClick={() => navigate("/Manufacturing")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#B2D469] mr-2">🏭</span>
                      <span>Manufacturing</span>
                    </li>
                    <li onClick={() => navigate("/SaaS/IT")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#116B9E] mr-2">💻</span>
                      <span>SaaS/IT</span>
                    </li>
                    <li onClick={() => navigate("/PayrollServiceProviders")} className="flex items-center hover:bg-gray-100 p-2 rounded">
                      <span className="text-[#B2D469] mr-2">💼</span>
                      <span>Payroll Service Providers</span>
                    </li>
                  </ul>
                </div>

                <div className="col-span-1 bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col items-center">
                    <img
                      src="/api/placeholder/220/150"
                      alt="Growth chart"
                      className="mb-4"
                    />
                    <h3 className="font-bold text-lg mb-2">Automate HR and Payroll Processes</h3>
                    <p className="text-sm mb-4">Drive people and business growth in your company.</p>
                    <button className="text-[#116B9E] font-medium">Get a Demo</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button onClick={() => navigate("/about")} className="w-full md:w-auto text-left hover:text-[#D4E57B] text-lg font-medium text-[#116B9E] transition duration-300 py-2 md:py-0">About Us</button>
        <button onClick={() => navigate("/faqs")} className="w-full md:w-auto text-left hover:text-[#B2D469] text-lg font-medium text-[#116B9E] transition duration-300 py-2 md:py-0">FAQs</button>

        <div className="relative w-full md:w-auto" ref={resourcesRef}>
          <button
            className="flex w-full md:w-auto items-center justify-between md:justify-start md:space-x-1 hover:text-[#B2D469] text-lg font-medium text-[#116B9E] transition duration-300 py-2 md:py-0"
            onClick={() => {
              setResourcesOpen(!resourcesOpen);
              setFeatureOpen(false);
            }}
            aria-expanded={resourcesOpen}
          >
            <span>Resources</span>
            <FaChevronDown className={`ml-1 transition-transform duration-300 ${resourcesOpen ? "rotate-180" : "rotate-0"}`} />
          </button>
          {resourcesOpen && (
            <div className="absolute left-0 mt-2 w-full md:w-[800px] max-w-[96vw] bg-white shadow-lg rounded-md p-4 md:p-6 text-black overflow-auto max-h-[80vh] md:max-h-[600px] z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1">
                  <div className="flex items-center mb-4 text-[#116B9E] font-medium">
                    <span className="text-[#116B9E] mr-2">📚</span>
                    <span>Resource Library</span>
                  </div>
                  <ul className="space-y-3 pl-8">
                    <li onClick={() => navigate("/blog")} className="hover:bg-gray-100 p-2 rounded">Blogs</li>
                    <li className="hover:bg-gray-100 p-2 rounded">Guides</li>
                    <li className="hover:bg-gray-100 p-2 rounded">Templates</li>
                    <li className="hover:bg-gray-100 p-2 rounded">Reports & Insights</li>
                  </ul>

                  <div className="flex items-center mt-6 mb-3 text-[#B2D469] font-medium">
                    <span className="text-[#B2D469] mr-2">📊</span>
                    <span>Performance Management</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#116B9E] font-medium">
                    <span className="text-[#116B9E] mr-2">💰</span>
                    <span>Payroll Management</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#B2D469] font-medium">
                    <span className="text-[#B2D469] mr-2">🌴</span>
                    <span>Leave Management</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#116B9E] font-medium">
                    <span className="text-[#116B9E] mr-2">⏰</span>
                    <span>Attendance Management</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#B2D469] font-medium">
                    <span className="text-[#B2D469] mr-2">🔒</span>
                    <span>Statutory Compliances</span>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="flex items-center mb-4 text-[#116B9E] font-medium">
                    <span className="text-[#116B9E] mr-2">📋</span>
                    <span>HRMS</span>
                  </div>

                  <div className="flex items-center mt-6 mb-3 text-[#B2D469] font-medium">
                    <span className="text-[#B2D469] mr-2">📺</span>
                    <span>Webinars</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#116B9E] font-medium">
                    <span className="text-[#116B9E] mr-2">🎙️</span>
                    <span>Podcasts</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#B2D469] font-medium">
                    <span className="text-[#B2D469] mr-2">🤝</span>
                    <span>Partners</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#116B9E] font-medium">
                    <span className="text-[#116B9E] mr-2">🎓</span>
                    <span>Academy</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#B2D469] font-medium bg-purple-50 p-2 rounded">
                    <span className="text-[#B2D469] mr-2">👥</span>
                    <span>Community</span>
                  </div>

                  <div className="flex items-center mt-5 mb-3 text-[#116B9E] font-medium">
                    <span className="text-[#116B9E] mr-2">❓</span>
                    <span>greytHR Help</span>
                  </div>
                </div>

                <div className="col-span-1">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <img
                      src="/api/placeholder/220/150"
                      alt="HR Ratio Report"
                      className="w-full h-36 object-cover rounded mb-4"
                    />
                    <h3 className="font-bold text-lg mb-2">HR Ratio Report 2024</h3>
                    <p className="text-sm mb-4">Discover key insights into HR ratios across industries and company sizes in India</p>
                    <button className="text-[#116B9E] font-medium">Read Now</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button onClick={() => navigate("/contact")} className="flex w-full md:w-auto items-center justify-center space-x-2 bg-[#116B9E] text-lg px-4 py-2 rounded-full hover:bg-[#B2D469] transition duration-300 text-white">
          <FaQuestionCircle />
          <span>Help</span>
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-4 ml-auto">
        <button className="bg-white text-base sm:text-lg px-3 sm:px-6 py-1 sm:py-2 rounded-full hover:bg-[#B2D469] transition duration-300 text-black rounded-small whitespace-nowrap">Request Demo</button>
        <button className="bg-[#116B9E] text-base sm:text-lg text-white px-6 sm:px-6 py-1 sm:py-2 rounded-full hover:bg-[#B2D469] transition duration-300 whitespace-nowrap">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;