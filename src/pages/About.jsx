import React from "react";
import Banner from "../components/about/Banner";
import HelpingGrow from "../components/about/HelpingGrow";
import MissionAndVision from "../components/about/MissionAndVision";
import OurNumbers from "../components/about/OurNumbers";
import ContactUs from "../components/ContactUs";
// import Whyus from "../components/about/Whyus";
import Partner from "../components/about/Partner";

const About = () => {
  return (
    <>
      <Banner />
      <HelpingGrow />
      <MissionAndVision />
      <OurNumbers /><br/><br/>
      
      <Partner/>
      <ContactUs />
    </>
  );
};

export default About;
