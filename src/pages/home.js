import Navbar from "../components/Navbar";
import HeroSection from "../components/Home/Hero";
import HrValue from "../components/Home/HrValue";
import HRMSCardsSection from "../components/Home/HRMSCard";
import HomeCards from "../components/Home/HomeCards";
import MobileHome from "../components/Home/MobileHome";

import Footer from "../components/Footer";
import VideoComponent from "../components/Home/VideoComponent";



function Home() {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <VideoComponent />
       
        <HrValue />
        <HRMSCardsSection />
        <HomeCards />
        <MobileHome />
       
        <Footer />
       
      </div>
    );
  }
  
  export default Home;
  