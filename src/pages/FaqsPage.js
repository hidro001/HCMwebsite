
import Navbar from "../components/Navbar";
import FaqsHeroSection from "../components/Faqs/FaqsHero";
import HumanMaximizerFAQ from "../components/Faqs/FaqsMainContent";

import Footer from "../components/Footer";
import HubSpotPromoSection from "../components/Faqs/FaqsFreeTrial";



function Faqs() {
    return (
      <div>
        <Navbar />
        <FaqsHeroSection />
        <HumanMaximizerFAQ />
        <HubSpotPromoSection />
        <Footer />
       
      </div>
    );
  }
  
  export default Faqs;
  