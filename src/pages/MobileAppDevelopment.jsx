import React from "react";
import Banner from "../components/MobileAppDevelopment/Banner";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Home/Testimonials";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/GenerativeAI/SubService";
import Technologies from "../components/GenerativeAI/Technologies";

const MobileAppDevelopment = () => {
  return (
    <div>
      <Banner />
      <SubService />
      <Workflow />
      <Technologies />
      <Testimonials />
      <OurSolution />
      <FAQS />
    </div>
  );
};

export default MobileAppDevelopment;
