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
import AnnouncementPage from "./pages/AnnouncementPage";
import EmployeeEngagementPage from './pages/EmployeeEngagementPage';
import RecruitmentSoftwarePage from './pages/RecruitmentSoftwarePage';
import SaaSPage from './pages/SaaSPage';
import TaskManagementPage from "./pages/TaskManagementPage";
import PayrollServiceProvidersPage from "./pages/PayrollServicePage"
import PayrollManagement from "./pages/PayrollManagement";
import BlogPage from "./pages/BlogPage";
import RequestaDemo from "./pages/Demo";
import Login from "./pages/Login";
import EmployeeDataPage from "./pages/EmployeeData";
import TicketManagementPage from "./pages/TicketManagementPage";
import AssetsManagementPage from "./pages/AssetsManagementPage";





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
          <Route path="/EmployeeData" element={<EmployeeDataPage />} />
          <Route path="/EmployeeEngagement" element={<EmployeeEngagementPage />} />
          <Route path="/RecruitmentSoftware" element={<RecruitmentSoftwarePage />} />
          <Route path="/SaaS" element={<SaaSPage />} />
          <Route path="/TaskManagement" element={<TaskManagementPage />} />
          <Route path="/Announcement" element={<AnnouncementPage />} />
          <Route path="/PayrollServiceProviders" element={<PayrollServiceProvidersPage />} />
          <Route path="/PayrollManagement" element={<PayrollManagement />} />
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/TicketManagement" element={<TicketManagementPage />} />
          <Route path="/AssetsManagement" element={<AssetsManagementPage />} />


          {/* Demo Page */}
          <Route path="/RequestDemo" element={<RequestaDemo />} />
          {/* Login Page*/}
          <Route path="/Login" element={<Login />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
