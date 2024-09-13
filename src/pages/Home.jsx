import React from "react";
import ContactUs from "../components/ContactUs";
import WelcomeSection from "../components/Home/WelcomeSection";
import OffersSection from "../components/Home/OffersSection";
import WorkflowSection from "../components/Home/WorkflowSection";

const Home = () => {
  return (
    <div>
      <WelcomeSection />
      <OffersSection />
      <WorkflowSection />
      <ContactUs />
    </div>
  );
};

export default Home;
