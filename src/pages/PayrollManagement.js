
import Navbar from "../components/Navbar";
import PayrollHeroSection from "../components/PayrollSoftware/PayrollHero";
import FAQSection from "../components/HrSoftware/HrFaqs";
import BusinessContactSection from "../components/FreeConsultant";


import Footer from "../components/Footer";

function PayrollManagement() {
    return (
      <div>
        <Navbar />
        <PayrollHeroSection />
        <FAQSection />
        <BusinessContactSection />
       
     
        
        <Footer />
       
      </div>
    );
  }
  
  export default PayrollManagement;
  