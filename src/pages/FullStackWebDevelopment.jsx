import React from "react";
import Banner from "../components/FullStackDevelopment/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import { FAQsData } from "../components/Data/FAQsdata";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/FullStackDevelopment/SubService";
import Technologies from "../components/FullStackDevelopment/Technologies";
import Casestudy from './CasePage'
import ExplorePage from './ExplorePage'

const FullStackWebDevelopment = () => {
  return (
    <div>
      <Banner />
      <SubService />
      <Workflow />
      <Technologies />
      <Casestudy/>
      <OurSolution />
      <FAQS />
      <ExplorePage/>
      <Reviews />
    </div>
  );
};

export default FullStackWebDevelopment;
