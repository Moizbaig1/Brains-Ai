import React, { useEffect } from 'react'
// import AIBrainLandingPage from '../components/AiSoftwareBrains/AIBrainLandingPage';
// import AIMarketingLandingPage from '../components/AiSoftwareBrains/AIMarketingLandingPage';

import Banner from '../components/AIBrain/Banner'
import SubService from '../components/AIBrain/SubService';
import OffersSection from "../components/Home/OffersSection";
import ContactUs from "../components/ContactUs";
import PricingCard from "../components/AIBrain/PricingCard"

const AiSoftwareBrains = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Banner/>
         <SubService/>
        <PricingCard/>
        <OffersSection/>
        <ContactUs/> 
       
    </div>
  )
}

export default AiSoftwareBrains;