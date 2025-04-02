
import Navbar from "../components/Navbar";

import AboutWeBelieveSection from "../components/About/AboutWeBelive";
import AboutOurPorposeSection from "../components/About/AboutOurPurpose";
import AboutHowWeDoItSection from "../components/About/AboutHowWeDoItSection";
import AboutOurValuesSection from "../components/About/AboutOurValues";
import PeopleFreeSection from "../components/About/AboutParagraph";
import Footer from "../components/Footer";
import HRMSSoftware from "../components/About/AboutHero";
import HRProblemsCards from "../components/About/AboutWeBelive";


function About() {
  return (
    <div>
      <Navbar />
      <HRMSSoftware />
      <HRProblemsCards />
      <AboutOurPorposeSection />
      <AboutHowWeDoItSection />
      <PeopleFreeSection />
      <AboutOurValuesSection />

      <Footer />

    </div>
  );
}

export default About;
