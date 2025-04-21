
import Navbar from "../components/Navbar";
import HrHeroSection from "../components/HrSoftware/HrHero";
import FeaturesSection from "../components/HrSoftware/HrFeaturesSection";
import HROperationsPage from "../components/HrScroll";
import HrSkillSection from "../components/HrSoftware/HrSkillSection";
import FAQSection from "../components/HrSoftware/HrFaqs";
import BusinessContactSection from "../components/FreeConsultant";


import Footer from "../components/Footer";

function HrSoftwarePage() {
    return (
      <div>
        <Navbar />
        <HrHeroSection />
        <FeaturesSection />
        <HROperationsPage />
        <HrSkillSection />
        <FAQSection />
        <BusinessContactSection />
        
     
        
        <Footer />
       
      </div>
    );
  }
  
  export default HrSoftwarePage;
  