import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/Hero";
import HrValue from "../components/Home/HrValue";
import HRMSCardsSection from "../components/Home/HRMSCard";
import HomeCards from "../components/Home/HomeCards";
import MobileHome from "../components/Home/MobileHome";

import Footer from "../components/Footer";
import VideoSection from "../components/Home/Video";
import BusinessContactSection from "../components/FreeConsultant";





function Home() {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <VideoSection />
        <HrValue />
        <HRMSCardsSection />
        <MobileHome />
        <HomeCards />
        <BusinessContactSection />
       
        <Footer />
       
      </div>
    );
  }
  
  export default Home;
  