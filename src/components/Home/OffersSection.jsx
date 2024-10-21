import React, { useEffect, useState } from "react";
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
  const [showAll, setShowAll] = useState(false);

  const Data = [
    {
      id: 1,
      name: "GENERATIVE AI",
      image: AIimage,
      subservice: [
        "Generative AI Development",
        "Natural Language Processing (NLP)",
        "AI Chatbot Development",
        "Retrieval-Augmented Generation (RAG)",
      ],
      link: "/generativeai",
    },
    {
      id: 2,
      name: "WEB DEVELOPMENT",
      image: WordpressImage,
      subservice: [
        "Front End Development",
        "Backend Development",
        "Modern SaaS Applications",
      ],
      link: "/fullstackdevelopment",
    },
    {
      id: 3,
      name: "MOBILE APP DEVELOPMENT",
      image: MobileApp,
      subservice: ["Custom App Development", "Flutter App Development"],
      link: "/mobileappdevelopment",
    },
    {
      id: 4,
      name: "CMS DEVELOPMENT",
      image: WordpressImage,
      subservice: [
        "WordPress Development",
        "eCommerce Web Development",
        "QA/Testing Services",
      ],
      link: "/cmsdevelopment",
    },
    {
      id: 5,
      name: "BLOCKCHAIN",
      image: Blockchain,
      subservice: ["Blockchain Development"],
      link: "/blockchain",
    },
    {
      id: 6,
      name: "DIGITAL MARKETING",
      image: WordpressImage,
      subservice: ["SEO", "Content Marketing"],
      link: "/digitaldevelopment",
    },
    {
      id: 7,
      name: "WEB 3.0 METAVERSE",
      image: Web3,
      subservice: [
        "Generative AI Development",
        "Natural Language Processing (NLP)",
        "AI Chatbot Development",
        "Retrieval-Augmented Generation (RAG)",
      ],
      link: "/webandmetaverse",
    },
    {
      id: 8,
      name: "UI/UX DESIGN",
      image: UIUX,
      subservice: ["UI Design", "UX Research"],
      link: "/uiuxdesign",
    },
    {
      id: 9,
      name: "CYBER SECURITY",
      image: FullStack,
      subservice: [
        "Penetration Testing",
        "Threat Intelligence",
        "Incident Response",
      ],
      link: "/cybersecurity",
    },
  ];

  useEffect(() => {
    Aos.init();
  }, []);

  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Determine the number of items to show based on the showAll state
  const visibleData = showAll ? Data : Data.slice(0, 6);

  return (
    <>
      {/* <div className="">
        <img className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div> */}

      <section className="relative  flex flex-col space-y-8 items-center xl:px-32 bg-white mb-16 px-5 sm:px-10 lg:px-20">
        {/* <div className="absolute right-0 bottom-0 -z-10 animate-pulse">
          <img className="xl:w-full" alt="gradient2" src={Gradient2} />
        </div> */}
        <h1
         data-aos="fade-up"
          className="font-varino text-[26px] sm:text-[38px] lg:text-[60px] xl:text-[65px] text-center text-black"
        >
          SERVICES
        </h1>
        <p
          className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-gray-700 font-extralight w-10/12 md:w-6/12 xl:w-8/12"
          data-aos="fade-up"
        >
          We Deliver Innovative Gen AI, Web 3.0, Social Media Services,
          Serverless Cloud, Full-Stack Apps, SAAS Development, UI/UX design, and
          Digital Marketing Solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
          {visibleData.map((offer) => (
            <div
              key={offer.id}
              data-aos="fade-up"
              className="rounded-[40px] bg-gradient-to-b from-gray-800 to-black p-1 w-full h-[24rem] shadow-lg"
            >
              <Link to={offer.link} onClick={handleLinkClick}>
                <div className="flex flex-col justify-center items-center bg-white h-full w-full rounded-[36px]">
                  <div className="relative flex flex-col items-center justify-center py-8 space-y-4 z-20">
                    {offer.image && (
                      <img src={offer.image} alt={offer.name} className="w-3/4" />
                    )}
                    <p className="font-varino text-[20px] text-center text-black">
                      {offer.name}
                    </p>
                    <p className="font-monosans text-[14px] text-center text-gray-600 px-6">
                      {offer.subservice.join(", ")}
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

        <div className="w-full flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-8 mb-12 px-8 py-3 bg-black text-white rounded-full transition-transform transform hover:scale-105"
          >
            {showAll ? "Show Less" : "Explore More"}
          </button>
        </div>
      </section>
    </>
  );
};

export default OffersSection;
