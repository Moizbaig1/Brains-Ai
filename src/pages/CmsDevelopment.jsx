import React from 'react'
import Banner from "../components/CmsDevelopment/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/CmsDevelopment/SubService";
import Technologies from "../components/CmsDevelopment/Technologies";
import Casestudy from './CasePage'
import ExplorePage from './ExplorePage'

const CmsDevelopment = () => {
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
  )
}

export default CmsDevelopment


