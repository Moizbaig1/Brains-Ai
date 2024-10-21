import React from "react";
import { Link } from "react-router-dom";
import vision from "../../../public/images/vision.png";

const PreviewSection = () => {
  return (
    <>
      <section className="mt-16 p-6 lg:p-10 relative">
        {/* <h1 className="font-varino text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center text-white mb-10">
          Explore Our AI Solutions
        </h1> */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Software Brains Preview */}
          <div className="flex justify-center items-center order-1">
            <img 
            
              src={vision}
              alt="AI Software Brains"
              className="rounded-3xl w-full max-w-[534px] h-auto border-2 border-white"
            />
          </div>

          <div className="flex flex-col items-start text-left p-6 order-2">
            <h1
           
             className="font-varino text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center text-white mb-8">
              AI Software Brains
            </h1>
            <p 
           
            className="text-gray-400 mb-4">
              AI Software Brains develops smart AI solutions that automate
              tasks, optimize processes, and drive innovation across industries.
              We create intelligent software to help businesses make data-driven
              decisions and boost efficiency.
            </p>
            <Link
              to="/AiBrainLandingPage"
              className="bg-transparent border-2 border-white text-white py-2 px-4 rounded-full transition duration-300 hover:bg-blue-700 mt-10"
            >
              Features and Benefits
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 p-6 lg:p-10 relative bg-white text-black">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* AI Marketing Plugin */}
          <div className="flex flex-col items-start text-left p-6 order-1">
            {/* <h1
              className="font-varino capitalize text-[30px] xl:text-[50px] text-center mb-8"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            > */}
            <h1 
            
            className="font-varino text-[22px] sm:text-[28px] lg:text-[50px] xl:text-[55px] text-center text-black leading-tight">
              AL MARKETING
              <br />
              PLUGIN
            </h1>
            <p 
           
            className="text-black-400 mb-4">
              AI Marketing Plugin enhances your marketing efforts with
              intelligent automation, personalized content, and data-driven
              insights. It seamlessly integrates with your existing tools to
              optimize campaigns, boost engagement, and improve conversion
              rates, all powered by advanced AI technology.
            </p>
            <Link
              to="/AiMarketingLandingPage"
              className="border-2 border-black rounded-full bg-transparent text-black py-2 px-4 hover:bg-white hover:text-black transition"
            >
              Explore More
            </Link>
          </div>

          <div className="flex justify-center items-center order-2">
            <img
            
              src={vision}
              alt="AI Marketing Plugin"
              className="rounded-3xl w-full max-w-[534px] h-auto border-2 border-white"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviewSection;
