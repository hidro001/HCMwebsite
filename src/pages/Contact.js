
import Navbar from "../components/Navbar";
import ContactBanner from "../components/Contact/ContactHero";
import ContactCardsContainer from "../components/Contact/ContactCard";
import ContactUsForm from "../components/Contact/ContactForm";
import HelpHRJourneySection from "../components/Contact/ContactInformation";
import BusinessContactSection from "../components/FreeConsultant";
import Footer from "../components/Footer";





function Contact() {
    return (
      <div>
        <Navbar />
        <ContactBanner />
        <ContactCardsContainer />
        <HelpHRJourneySection />
        <ContactUsForm />
        <BusinessContactSection />
       
        <Footer />
       
      </div>
    );
  }
  
  export default Contact;
  