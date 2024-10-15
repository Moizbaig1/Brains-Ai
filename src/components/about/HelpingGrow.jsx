import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Gradient1 from "../../../public/svgs/gradient1.svg";
import RightGradient from "../../../public/svgs/right.svg";
import helpImg from "../../../public/images/helpImg.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { FaPlus, FaTimes } from "react-icons/fa";

// Data for Accordion
const data = [
  {
    heading: "What is Brains AI?",
    detail:
      "Welcome to Brains AI! Headquartered in the USA with dynamic regional offices in Pakistan and the UK, we specialize in cutting-edge frontend and backend development. Our expertise extends to powerful social media marketing strategies, ensuring your digital presence thrives in a competitive landscape. Join us in shaping the future of technology and digital engagement!",
  },
  {
    heading: "What services do you provide?",
    detail:
      "We offer a comprehensive suite of services, including Gen AI, Web 3.0, CMS, Serverless Cloud, Full-Stack Apps, SAAS Development, UI/UX design, and Digital Marketing. Proficient in Flutter, Laravel, and MERN stack, they deliver customized, cutting-edge solutions, meeting clients' evolving needs.",
  },
];

// Functional component
const HelpingGrow = () => {
    useEffect(() => {
      Aos.init();
    }, []);

  return (
    <>
      {/* Gradient */}
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <img className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>

      {/* Main Section */}
      <section className="relative">
        {/* Right Gradient */}
        <div
          className="absolute right-0 top-80 -z-10"
          style={{ maxWidth: "100%", height: "auto" }}
        >
          <img
            className="xl:w-full animate-bounce"
            alt="gradient1"
            src={RightGradient}
          />
        </div>

        {/* Content */}
        <div className="snap-center flex flex-col space-y-4 items-center mt-32">
          <h1
            data-aos="fade-up"
            className="drop-shadow-2xl font-varino capitalize text-[30px] xl:text-[50px] text-center w-10/12 md:w-3/4 xl:w-3/4"
            style={{
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Helping you grow in the real of Web 3.0
          </h1>
          <p
            data-aos="fade-up"
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-6/12 xl:w-6/12"
          >
            We are helping you grow with Web 3.0, where Gen AI, CMS, and modern
            tech come together to achieve technological advancements.
          </p>
        </div>

        {/* Image and Accordion Section */}
        <div className="grid lg:grid-cols-2 gap-5 lg:my-20 my-10 lg:px-20 px-5">
          {/* Image Section */}
          <div className="flex justify-center" data-aos="fade-up">
            <img
              src={helpImg}
              alt="helping grow"
              className="rounded-3xl bg-gradient-to-r from-[#EC66B7] to-[#2D5887] p-1 w-[100%] max-w-[534px] h-auto"
            />
          </div>

          {/* Accordion Section */}
          <div className="flex flex-col">
            <h1
              data-aos="fade-up"
              className="font-varino capitalize text-[20px] xl:text-[30px] text-center"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Welcome to Brains AI
            </h1>

            {/* Accordion Component */}
            <Accordion
              data-aos="fade-up"
              className="border-none outline-none mt-5 font-monosans"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, i) => (
                <AccordionItem
                  data-aos="fade-up"
                  className="outline-none overflow-hidden mb-5 shadow-lg"
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton
                      className="flex flex-wrap items-center justify-between gap-y-8 border-b border-white p-4 w-full cursor-pointer"
                      data-aos="fade-up"
                    >
                      <div
                        className="text-white lg:text-[20px]"
                        data-aos="fade-up"
                      >
                        {item.heading}
                      </div>

                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded ? (
                            <FaTimes size={20} color="#fff" />
                          ) : (
                            <FaPlus size={20} color="#fff" />
                          )
                        }
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-white">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpingGrow;
