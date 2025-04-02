
import Navbar from "../components/Navbar";
import HrHeroSection from "../components/HrSoftware/HrHero";
import FeaturesSection from "../components/HrSoftware/HrFeaturesSection";
import HROperationsPage from "../components/HrScroll";
import FAQSection from "../components/HrSoftware/HrFaqs";


import Footer from "../components/Footer";

function HrSoftwarePage() {
    return (
      <div>
        <Navbar />
        <HrHeroSection />
        <FeaturesSection />
        <HROperationsPage />
        <FAQSection />
        
     
        
        <Footer />
       
      </div>
    );
  }
  
  export default HrSoftwarePage;
  