import React, { useEffect } from 'react'
import AIBanner from '../components/AIBanner';
import OffersSection from "../components/Home/OffersSection";
import ContactUs from "../components/ContactUs";
import AISubService from '../components/AISubService';
import AIPricingCard from '../components/AIPricingCard';


const AiMarketingPlugin = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <AIBanner/>
        <AISubService/>
        <AIPricingCard/>
        <OffersSection/>
        <ContactUs/> 
    </div>
  )
}

export default AiMarketingPlugin

