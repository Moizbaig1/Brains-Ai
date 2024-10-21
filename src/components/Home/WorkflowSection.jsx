import React, { useEffect } from "react";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const WorkflowSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-white px-5 sm:px-10 lg:px-20 py-16 relative">
      {/* <div className="absolute left-0 top-0 w-full h-full">
        <img className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div> */}
      <section className="relative flex flex-col items-center space-y-10 mx-auto">
        <img
          className="absolute rounded-3xl -z-10 w-full h-full animate-pulse"
          alt="cardBG"
          src="/svgs/purpleGradient.svg"
        />

        {/* Why Choose Us Section */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="flex flex-col space-y-3 sm:space-y-4 items-center">
            <h1 
            data-aos="fade-up"
            className="font-varino text-[26px] sm:text-[38px] lg:text-[60px] xl:text-[65px] text-center text-black">
            
              OUR WORK FLOW
            </h1>
            <p
             className="text-[14px] sm:text-[16px] xl:text-[18px] lg:text-[18px] text-center font-monosans text-gray-600 font-extralight w-[90%] md:w-8/12 xl:w-full">
              Our Professional Workflow, Certifications, Awards, and Numbers
              Prove the Quality We Offer.
            </p>
          </div>

          <img
          data-aos="fade-up"
            className="w-[320px] sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1000px] object-contain select-none"
            alt="Workflow Image"
            src="/images/workflowImages/workflow.png"
          />
        </div>
      </section>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default WorkflowSection;
