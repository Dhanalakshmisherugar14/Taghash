
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CSCRFHero from "../components/CSCRFHero";
import CSCRFTimeline from "../components/CSCRFTimeline";
import CSCRFCategory from "../components/CSCRFCategory";
import AIFManager from "../components/AIFManager";
import CSCRFControlCentre from "../components/CSCRFControlCentre";
import CSCRFDeadline from "../components/CSCRFDeadline";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CSCRFHero/>
      <CSCRFTimeline/>
      <CSCRFCategory/>
      <AIFManager/>
      <CSCRFControlCentre/>
      <CSCRFDeadline/>
      <Footer/>
    </div>
  );
};

export default Home;
