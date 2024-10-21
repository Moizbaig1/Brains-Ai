import React from "react";
import Banner from "../components/WebandMetaverse/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/WebandMetaverse/SubService";
import Technologies from "../components/WebandMetaverse/Technologies";
import Casestudy from './CasePage'
import ExplorePage from './ExplorePage'

const WebAndMetawerse = () => {
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

export default WebAndMetawerse;
