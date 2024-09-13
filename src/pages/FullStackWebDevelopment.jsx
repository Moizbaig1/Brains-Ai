import React from "react";
import Banner from "../components/FullStackDevelopment/Banner";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Home/Testimonials";
import { FAQsData } from "../components/Data/FAQsdata";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/GenerativeAI/SubService";
import Technologies from "../components/GenerativeAI/Technologies";

const FullStackWebDevelopment = () => {
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

export default FullStackWebDevelopment;
