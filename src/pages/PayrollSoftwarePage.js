import Navbar from "../components/Navbar";
import PayrollHeroSection from "../components/PayrollSoftware/PayrollHero";
import FeaturesSection from "../components/HrSoftware/HrFeaturesSection";
import HROperationsPage from "../components/HrScroll";
import WorkforceEmpowerment from "../components/HRManagementTools";
import FAQSection from "../components/HrSoftware/HrFaqs";
import BusinessContactSection from "../components/FreeConsultant";

import Footer from "../components/Footer";

function PayrollSoftware() {
  return (
    <div>
      <Navbar />
      <PayrollHeroSection />
      <FeaturesSection />
      <HROperationsPage />
      <FAQSection />
      <BusinessContactSection />
      <Footer />
    </div>
  );
}

export default PayrollSoftware;
