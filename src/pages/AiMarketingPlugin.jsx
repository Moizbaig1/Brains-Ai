import React, { useEffect } from 'react'
import Banner from '../components/AIMarketing/Banner'
import SubService from '../components/AImarketing/SubService';
import OffersSection from "../components/Home/OffersSection";
import ContactUs from "../components/ContactUs";
import PricingCard from "../components/AIMarketing/PricingCard"
const AiMarketingPlugin = () => {
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

export default AiMarketingPlugin

