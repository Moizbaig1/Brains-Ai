import React from "react";
import ContactUs from "../components/ContactUs";
import WelcomeSection from "../components/Home/WelcomeSection";
import OffersSection from "../components/Home/OffersSection";
import WorkflowSection from "../components/Home/WorkflowSection";
import Reviews from "../components/Home/Reviews";
import PreviewSection from "../components/Home/PreviewSection";
import OurNumbers from "../components/about/OurNumbers";
import './Home.css'

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <OffersSection />
      <PreviewSection/>
      <WorkflowSection />
      <OurNumbers />
      
      <Reviews/>
      <ContactUs />
    </div>
  );
};

export default Home;
