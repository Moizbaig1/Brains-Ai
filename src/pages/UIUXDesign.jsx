import React from "react";
import Banner from "../components/UIUXDesign/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/UIUXDesign/SubService";
import Technologies from "../components/UIUXDesign/Technologies";
import Casestudy from './CasePage'
import ExplorePage from './ExplorePage'

const UIUXDesign = () => {
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
      {/* end  */}
    </div>
  );
};

export default UIUXDesign;
