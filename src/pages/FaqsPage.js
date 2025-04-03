
import Navbar from "../components/Navbar";
import FaqsHeroSection from "../components/Faqs/FaqsHero";
import HumanMaximizerFAQ from "../components/Faqs/FaqsMainContent";

import Footer from "../components/Footer";
import HubSpotPromoSection from "../components/Faqs/FaqsFreeTrial";
import BusinessContactSection from "../components/FreeConsultant";



function Faqs() {
    return (
      <div>
        <Navbar />
        <FaqsHeroSection />
        <HumanMaximizerFAQ />
        <HubSpotPromoSection />
        < BusinessContactSection />
        <Footer />
       
      </div>
    );
  }
  
  export default Faqs;
  