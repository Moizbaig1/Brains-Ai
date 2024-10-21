import React from 'react'
import Banner from "../components/CmsDevelopment/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/CmsDevelopment/SubService";
import Technologies from "../components/CmsDevelopment/Technologies";

const CmsDevelopment = () => {
  return (
    <div>
      <Banner />
      <SubService />
      <Workflow />
      <Technologies />
      
      <OurSolution />
      <FAQS />
      <Reviews />

      
    </div>
  )
}

export default CmsDevelopment


