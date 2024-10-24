import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

// Import original white number line
import NumberLine from "../../../public/images/workflowImages/AchivementsLine.png";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import RightGradient from "../../../public/svgs/right.svg";

const OurNumbers = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="bg-white text-black relative py-16">
      {/* Gradient */}
      {/* <div className="absolute inset-0" style={{ maxWidth: "100%", height: "auto" }}>
        <img className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div> */}
      <section className="relative pt-20">
        {/* Right Gradient */}
        {/* <div className="absolute right-0 top-80 -z-10" style={{ maxWidth: "100%", height: "auto" }}>
          <img className="xl:w-full" alt="right-gradient" src={RightGradient} />
        </div> */}
        <div className="h-full flex flex-col justify-between items-center space-y-12 lg:space-y-24 xl:space-y-24">
          <h1
           data-aos="fade-up"
           className="font-varino text-[24px] sm:text-[34px] lg:text-[48px] xl:text-[60px] text-center text-black mt-10 mb-12">
             OUR   ACHIEVEMENTS
          </h1>

          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className="relative">
              {/* Apply filter invert only to the image */}
              <img alt="achievements" src={NumberLine} className="h-[500px] mx-auto filter invert" />

              {/* Revenue Generated */}
              <div className="lg:-space-y-4 xl:-space-y-4 absolute -top-4 -left-[90px] xl:-top-12 xl:-left-[220px] lg:-top-12 lg:-left-[220px] flex-col items-center justify-center text-center xl:w-fit lg:w-fit w-8/12 font-monosans text-black">
                <p className="text-[22px] xl:text-[60px] lg:text-[60px] font-monosans font-extrabold">
                  {counterOn && <CountUp start={0} end={4} duration={2} />}.
                  {counterOn && <CountUp start={0} end={8} duration={2} />} B+
                </p>
                <p className="xl:text-[20px] lg:text-[20px] text-[14px] text-center font-poppins">REVENUE GENERATED</p>
              </div>

              {/* Projects Completed */}
              <div className="lg:-space-y-4 xl:-space-y-4 absolute top-36 left-[140px] xl:top-28 xl:left-[100px] lg:top-28 lg:left-[70px] flex-col items-center justify-center text-center xl:w-[350px] lg:w-[350px] w-8/12 font-monosans text-black">
                <p className="text-[22px] xl:text-[60px] lg:text-[60px] font-monosans font-extrabold">
                  {counterOn && <CountUp start={0} end={1000} duration={2} />}+
                </p>
                <p className="xl:text-[20px] lg:text-[20px] text-[14px] text-center font-poppins">PROJECTS COMPLETED</p>
              </div>

              {/* In-House Developers */}
              <div className="lg:-space-y-4 xl:-space-y-4 absolute top-[290px] -left-[80px] xl:top-[280px] xl:-left-[210px] lg:top-[280px] lg:-left-[210px] flex-col items-center justify-center text-center xl:w-fit lg:w-fit w-7/12 font-monosans text-black">
                <p className="text-[22px] xl:text-[60px] lg:text-[60px] font-monosans font-extrabold">
                  {counterOn && <CountUp start={0} end={100} duration={2} />}+
                </p>
                <p className="xl:text-[20px] lg:text-[20px] text-[14px] text-center font-poppins">IN-HOUSE DEVELOPERS</p>
              </div>

              {/* Client Satisfaction */}
              <div className="lg:-space-y-4 xl:-space-y-4 absolute top-[460px] left-[140px] xl:top-[440px] xl:left-[100px] lg:top-[430px] lg:left-[80px] flex-col items-center justify-center text-center xl:w-[350px] lg:w-[350px] w-7/12 font-monosans text-black mb-8">
                <p className="text-[22px] xl:text-[60px] lg:text-[60px] font-monosans font-extrabold">
                  {counterOn && <CountUp start={0} end={98} duration={2} />}%
                </p>
                <p className="xl:text-[20px] lg:text-[20px] text-[14px] text-center font-poppins">CLIENT SATISFACTION</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
      <div className="py-16"></div>
    </div>
  );
};

export default OurNumbers;
