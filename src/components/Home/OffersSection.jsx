import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// Import image paths directly
import AIimage from "../../../public/images/ai.png";
import FullStack from "../../../public/images/FullStack.png";
import Blockchain from "../../../public/images/Blockchain.png";
import MobileApp from "../../../public/images/MobileApp.png";
import UIUX from "../../../public/images/UIUX.png";
import Web3 from "../../../public/images/Web3.png";
import SAAS from "../../../public/images/SAAS.png";
import WordpressImage from "../../../public/images/Wordpress.png";

import purpleGradient from "../../../public/svgs/purpleGradient.svg";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import Gradient2 from "../../../public/svgs/RightCornerGradient.svg";

const OffersSection = () => {
  const Data = [
    {
      id: 1,
      title: "GENERATIVE AI",
      description:
        "Elevate With Next Gen AI Mastering Machine Learning, Deep Learning, And Fine-Tuning LLMs For Text, Images, Code, And More",
      image: AIimage,
      click: "/generativeai",
    },
    {
      id: 2,
      title: "FULL STACK WEB DEVELOPMENT",
      description:
        "Building Full-Stack Websites With MEAN, Laravel, And CERN. Improve Your Online Presence With Innovative, Tailored Development.",
      image: FullStack,
      click: "/fullstackdevelopment",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Social Media, Planet-Scale Web 3.0 DApps, DEFI, DEX—Unleashing Decentralized Innovation For Tomorrow's Marketplaces.",
      image: Blockchain,
      click: "/digitaldevelopment",
    },
    {
      id: 4,
      title: "MOBILE APP DEVELOPMENT",
      description:
        "Transform Mobility Cross-platform Apps Flutter And React Native For Mac, Windows, Linux, iPad, iPhone, Android, Watch, and TV",
      image: MobileApp,
      click: "/mobileappdevelopment",
    },
    {
      id: 5,
      title: `EMBEDDED <br> SYSTEMS`,
      description:
        "Efficient, custom embedded systems for seamless integration and top performance. High-performance embedded solutions tailored for your device's needs.",
      image: Web3,
      click: "/webandmetaverse",
    },
    {
      id: 6,
      title: "UI/UX DESIGN",
      description:
        "Researching On User To Craft User Experience Design (UED) & Converting Them Into Visuals",
      image: UIUX,
      click: "/uiuxdesign",
    },
    {
      id: 7,
      title: "MODERN SAAS APPLICATIONS",
      description:
        "Create Planet-Scale Serverless Cloud Apps And APIs For Modern Web 2.0 SaaS Excellence (Revolutionize With Next.js 13 & CDK).",
      image: SAAS,
      click: "/saasapplication",
    },
    {
      id: 8,
      title: "WORDPRESS PLUGIN DEVELOPMENT",
      description:
        "Upgrade E-Commerce Websites For Smooth Operation And Expansion. Boost Business Online With Personalized WordPress Plugins.",
      image: WordpressImage,
      click: "/wordpressplugindevelopment",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  // Function to handle scroll to top on link click
  const handleLinkClick = (e) => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Gradient divs */}
      <div className="absolute left-0">
        <img className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div>

      {/* End Gradient divs */}
      <section className="relative flex flex-col space-y-3 items-center mt-[30px] lg:mt-[60px] xl:px-32">
        <div className="absolute right-0 bottom-0 -z-10 animate-pulse">
          <img className="xl:w-full" alt="gradient2" src={Gradient2} />
        </div>
        <h1
          className="font-varino text-[26px] sm:text-[38px] lg:[60px] xl:text-[65px] text-center"
          style={{
            background: "linear-gradient(to bottom, white, gray)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          data-aos="fade-up"
        >
          WHAT WE OFFER
        </h1>
        <p
          className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-6/12 xl:w-8/12"
          data-aos="fade-up"
        >
          We Deliver Innovative Gen AI, Web 3.0, Social Media Services,
          Serverless Cloud, Full-Stack Apps, SAAS Development, UI/UX design, and
          Digital Marketing Solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center py-5 px-7 lg:px-0">
          {Data.map((offer, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`rounded-[40px] bg-gradient-to-b from-[#EC66B7] to-[#2D5887] p-1 w-full h-[24rem] ${
                index % 2 === 1 ? "lg:mt-[3rem]" : ""
              } `}
            >
              <Link to={offer.click} onClick={handleLinkClick}>
                <div className="flex flex-col justify-center items-center bg-[#111424] h-full w-full rounded-[36px]">
                  <div className="relative flex flex-col items-center justify-center py-[16px] space-y-3 z-20">
                    <img src={offer.image} alt={offer.title} />
                    <p
                      className="font-varino text-[18px] text-center text-white"
                      dangerouslySetInnerHTML={{ __html: offer.title }}
                    />
                    <p className="font-monosans text-[12px] text-center text-white px-[15px]">
                      {offer.description}
                    </p>

                    <img
                      className="absolute -top-3 rounded-3xl -z-10 w-full h-full"
                      alt="cardBG"
                      src={purpleGradient}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OffersSection;
