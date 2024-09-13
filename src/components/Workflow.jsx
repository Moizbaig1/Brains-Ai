import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Workflow = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex flex-col items-center space-y-10 mt-10">
      <div className="flex flex-col space-y-3 sm:space-y-4 items-center">
        <h1
          data-aos="fade-up"
          className="px-2 sm:px-0 font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center capitalize"
          style={{
            background: "linear-gradient(to bottom, white, gray)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          OUR WORK FLOW
        </h1>
        <p
          data-aos="fade-up"
          className="text-[14px] sm:text-[16px] xl:text-[18px] lg:text-[18px] text-center font-monosans text-white font-extralight w-[90%] md:w-8/12 xl:w-full"
        >
          Our Professional Workflow, Certifications, Awards And Numbers Will
          Prove The Quality We Offer.
        </p>
      </div>

      <img
        className="w-[320px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1000px] object-contain select-none"
        alt="WorkflowImage"
        src="/images/workflowImages/WorkflowImage.png"
        data-aos="fade-up"
      />
    </div>
  );
};

export default Workflow;
