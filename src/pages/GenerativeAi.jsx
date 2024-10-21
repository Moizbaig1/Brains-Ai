import React from "react";
import Banner from "../components/GenerativeAI/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import Technologies from "../components/GenerativeAI/Technologies";
import SubService from "../components/GenerativeAI/SubService";
import Casestudy  from "../pages/Casestudy";
const GenerativeAi = () => {
  return (
    <div>
      <Banner />
      <SubService />
      <Workflow />
      <Technologies />
      <Casestudy/>
      <OurSolution />
      <FAQS />
      <Reviews/>
    </div>
  );
};

export default GenerativeAi;
