import React from "react";
import Banner from "../components/WebandMetaverse/Banner";
import Workflow from "../components/Workflow";
import Testimonials from "../components/Home/Testimonials";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/WebandMetaverse/SubService";
import Technologies from "../components/WebandMetaverse/Technologies";

const WebAndMetawerse = () => {
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

export default WebAndMetawerse;