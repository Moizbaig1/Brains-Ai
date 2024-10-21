import React from 'react'
import Banner from "../components/Blockchain/Banner";
import Workflow from "../components/Workflow";
import Reviews from "../components/Home/Reviews";
import FAQS from "../components/FAQs";
import OurSolution from "../components/OurSolution";
import SubService from "../components/Blockchain/SubService";
import Technologies from "../components/Blockchain/Technologies";

export default function BlockchainPage() {
  return (
    <div>
      <Banner />
      <SubService />
      <Workflow />
      <Technologies />
      {/* hell0 */}
      <OurSolution />
      <FAQS />
      <Reviews />
    </div>
  )
}





