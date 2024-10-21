import React from "react";
import Banner from "../components/DigitalMarketing/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/DigitalMarketing/SubService";
import Technologies from "../components/DigitalMarketing/Technologies";
import Casestudy from './CasePage'
import ExplorePage from './ExplorePage'

const DigitalMarketing = () => {
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

export default DigitalMarketing;
