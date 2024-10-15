import React from "react";
import Banner from "../components/MobileAppDevelopment/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/MobileAppDevelopment/SubService";
import Technologies from "../components/MobileAppDevelopment/Technologies";

const MobileAppDevelopment = () => {
  return (
    <div>
      <Banner />
      <SubService />
      <Workflow />
      <Technologies />
      <Reviews />
      <OurSolution />
      <FAQS />
    </div>
  );
};

export default MobileAppDevelopment;
