import React from "react";
import Banner from "../components/WordpressPluginDevelopment/Banner";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Home/Testimonials";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/GenerativeAI/SubService";
import Technologies from "../components/GenerativeAI/Technologies";

const WordpressPluginDevelopment = () => {
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

export default WordpressPluginDevelopment;
