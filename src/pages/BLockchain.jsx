import React from 'react'
import Banner from "../components/Blockchain/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/Blockchain/SubService";
import Technologies from "../components/Blockchain/Technologies";

const blockchain = () => {
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

export default blockchain
