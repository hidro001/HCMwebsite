import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import FaqsPage from "./pages/FaqsPage";
import ContactPage from "./pages/Contact";


import HrSoftwarePage from "./pages/HrSoftwarePage";
import PayrollSoftwarePage from './pages/PayrollSoftwarePage'; 
import LeaveManagementPage from './pages/LeaveManagementPage';
import AttendanceManagementPage from './pages/AttendanceManagementPage';
import PerformanceManagementPage from './pages/PerformanceManagementPage';
import EmployeeSelfServicePage from './pages/EmployeeSelfServicePage';
import EmployeeEngagementPage from './pages/EmployeeEngagementPage';
import RecruitmentSoftwarePage from './pages/RecruitmentSoftwarePage';
import SaaSPage from './pages/SaaSPage';
import UniteMarketPlacePage from "./pages/UniteMarketPlacePage";
import ManufacturingPage from "./pages/ManufacturingPage";
import BlogPage from "./pages/BlogPage";





function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faqs" element={<FaqsPage />} />
          <Route path="/contact" element={<ContactPage />} />




          {/*Features  */}

          <Route path="/HrSoftware" element={<HrSoftwarePage />} />
          <Route path="/PayrollSoftware" element={<PayrollSoftwarePage />} />
          <Route path="/LeaveManagement" element={<LeaveManagementPage />} />
          <Route path="/AttendanceManagement" element={<AttendanceManagementPage />} />
          <Route path="/PerformanceManagement" element={<PerformanceManagementPage />} />
          <Route path="/EmployeeSelfService" element={<EmployeeSelfServicePage />} />
          <Route path="/EmployeeEngagement" element={<EmployeeEngagementPage />} />
          <Route path="/RecruitmentSoftware" element={<RecruitmentSoftwarePage />} />
          <Route path="/SaaSPage" element={<SaaSPage />} />
          <Route path="/UniteMarketPlace" element={<UniteMarketPlacePage />} />
          <Route path="/ManufacturingPage" element={<ManufacturingPage />} />
          <Route path="/Blog" element={<BlogPage />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
