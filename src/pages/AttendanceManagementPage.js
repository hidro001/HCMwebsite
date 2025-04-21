import Navbar from "../components/Navbar";
import PayrollHeroSection from "../components/PayrollSoftware/PayrollHero"
import FeaturesSection from "../components/HrSoftware/HrFeaturesSection";
import HROperationsPage from "../components/HrScroll";
import FAQSection from "../components/HrSoftware/HrFaqs";

import BussinessContactSection from "../components/FreeConsultant";
import Footer from "../components/Footer";

function AttendanceManagementPage() {
  return (
    <div>
      <Navbar />
      <PayrollHeroSection />
      <FeaturesSection />
      <HROperationsPage />
      <FAQSection />
      <BussinessContactSection />
      <Footer />
    </div>
  );
}

export default AttendanceManagementPage;
