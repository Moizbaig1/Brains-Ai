import React from "react";
import ContactUs from "../components/ContactUs";
import WelcomeSection from "../components/Home/WelcomeSection";
import OffersSection from "../components/Home/OffersSection";
import WorkflowSection from "../components/Home/WorkflowSection";
import Testimonials from "../components/Home/Testimonials";
import OurNumbers from "../components/about/OurNumbers";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <OffersSection />
      <WorkflowSection />
      <OurNumbers />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
