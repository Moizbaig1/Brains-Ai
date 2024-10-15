import React from "react";
import Banner from "../components/DigitalMarketing/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/DigitalMarketing/SubService";
import Technologies from "../components/DigitalMarketing/Technologies";

const DigitalMarketing = () => {
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

export default DigitalMarketing;
