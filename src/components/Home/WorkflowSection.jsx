import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const WorkflowSection = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-10 mb-16">
      <div className="absolute left-0">
        <img
          className="xl:w-full"
          alt="gradient1"
          src="/images/gradients/Gradient1.svg"
        />
      </div>
      <section className="relative flex flex-col items-center space-y-3 mt-[30px] lg:mt-[60px] mx-auto mb-6">
        <img
          className="absolute rounded-3xl -z-10 w-full h-full animate-pulse"
          alt="cardBG"
          src="/svgs/purpleGradient.svg"
        />

        {/* Why Choose US section */}
        <div className="flex flex-col items-center space-y-10">
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

        {/* Awards & Certifications */}
        <div className="h-full flex flex-col justify-between items-center gap-5 py-10 lg:py-20">
          <h1
            data-aos="fade-up"
            className="font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            AWARDS & CERTIFICATIONS
          </h1>

          <div className="flex flex-wrap gap-3 sm:gap-5 space-y-6 lg:space-x-4 lg:space-y-4 place-content-center items-center xl:space-x-4">
            <img
              src="/images/awardsImages/image 3.png"
              alt="PASHAImage"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/awardsImages/image 2.png"
              alt="PSEBImage"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/awardsImages/image 4.png"
              alt="FBR"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/awardsImages/NCCS.png"
              alt="NCCS"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/awardsImages/Pccc.png"
              alt="PCC"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/awardsImages/AirUni.png"
              alt="AirUni"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/awardsImages/Arid.png"
              alt="AridUni"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/brand1.png"
              alt="Brand1"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/brand2.png"
              alt="Brand2"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/brand3.png"
              alt="Brand3"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/brand4.png"
              alt="Brand4"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/brand5.png"
              alt="Brand5"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/brand6.png"
              alt="Brand6"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />

            <img
              src="/images/brand7.png"
              alt="Brand7"
              className="w-[80px] sm:w-[120px] sm:h-auto"
              data-aos="fade-up"
            />
          </div>
        </div>

        <div className="relative h-full flex flex-col justify-between items-center">
          <div>
            <img
              src="/svgs/Center1.svg"
              alt="center gradient"
              className="absolute right-0 top-[100rem] w-[50rem] animate-bounce"
            />
          </div>

          {/* Achievements */}
          <h1
            data-aos="fade-up"
            className="font-varino text-[26px] sm:text-[35px] xl:text-[66px] text-center mb-16"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Achievements
          </h1>

          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="relative">
              <img
                alt="alrigt_tech_achivements"
                src="/images/workflowImages/AchivementsLine.png"
                className="h-[420px] sm:h-[500px]"
                data-aos="fade-up"
              />

              {/* Revenue */}
              <div
                className="absolute -top-6 sm:-top-10 -left-[90px] xl:-top-9 xl:-left-[220px] lg:-top-9 lg:-left-[220px] flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={4} duration={2} delay={0} />
                  )}
                  .
                  {counterOn && (
                    <CountUp start={0} end={8} duration={2} delay={0} />
                  )}
                  B+
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  REVENUE GENERATED
                </p>
              </div>

              {/* Projects Completed */}
              <div
                className="absolute top-[118px] sm:top-32 left-[130px] sm:left-[160px] xl:top-32 xl:left-[90px] lg:top-30 lg:left-[90px] flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  PROJECTS COMPLETED
                </p>
              </div>

              {/* Satisfied Clients */}
              <div
                className="absolute top-[180px] sm:top-[280px] left-[260px] sm:left-[360px] xl:top-[300px] xl:left-[450px] lg:top-[290px] lg:left-[300px] flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  SATISFIED CLIENTS
                </p>
              </div>

              {/* Brands */}
              <div
                className="absolute top-[300px] sm:top-[360px] left-[140px] sm:left-[180px] xl:top-[300px] xl:left-[300px] lg:top-[350px] lg:left-[100px] flex-col items-center justify-center text-center"
                style={{
                  background: "linear-gradient(to bottom, white, gray)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
                data-aos="fade-up"
              >
                <p className="text-[18px] sm:text-[30px] xl:text-[42px] lg:text-[32px] font-monosans font-bold">
                  {counterOn && (
                    <CountUp start={0} end={50} duration={2} delay={0} />
                  )}
                  +
                </p>
                <p className="xl:text-[20px] lg:text-[18px] sm:text-[14px] text-[12px] text-center">
                  BRANDS WORKED WITH
                </p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  );
};

export default WorkflowSection;
