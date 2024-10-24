import React from "react";
import { Link } from "react-router-dom";
import vision from "../../../public/images/vision.png";

const PreviewSection = () => {
  return (
    <>
      <section className="mt-16 p-6 lg:p-10 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* AI Software Brains Preview */}
          <div className="flex justify-center items-center order-1">
            <img
              src={vision}
              alt="AI Software Brains"
              className="rounded-3xl w-full max-w-[534px] h-auto border-2 border-white"
            />
          </div>

          <div className="flex flex-col items-start text-left p-6 order-2">
            <h1 className="font-varino text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-left text-white mb-8 whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
              AI Software Brains
            </h1>
            <p className="text-gray-400 mb-4 text-[24px]">
              AI Software Brains develops smart AI solutions that automate
              tasks, optimize processes, and drive innovation across industries.
              We create intelligent software to help businesses make data-driven
              decisions and boost efficiency.
            </p>
            <Link
              to="/AiSoftwareBrains"
              className="
          bg-transparent border-2 border-white text-white py-2 px-4 
          rounded-full transition duration-300 
          hover:bg-blue-700 hover:border-blue-700 mt-6  h-[56px] w-[264px] text-center
        "
            >
              Features and Benefits
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 p-6 lg:p-10 relative bg-white text-black">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* AI Marketing Plugin */}
          <div className="flex flex-col items-center lg:items-start text-left p-6 order-1">
            <h1 className="font-varino text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left text-black leading-tight whitespace-nowrap max-w-full">
              AI MARKETING PLUGIN
            </h1>
            <p className="text-gray-600 mb-4 font-mona text-[24px]  mt-4 text-center lg:text-left">
              AI Marketing Plugin enhances your marketing efforts with
              intelligent automation, personalized content, and data-driven
              insights. It seamlessly integrates with your existing tools to
              optimize campaigns, boost engagement, and improve conversion
              rates, all powered by advanced AI technology.
            </p>
            <Link
              to="/AiMarketingPlugin"
              className="border-2 border-black rounded-full bg-transparent text-black py-2 px-4 hover:bg-blue-700 hover:text-white transition duration-300 mt-6 text-center lg:text-left h-[56px] w-[175px] flex justify-center items-center"
            >
              Explore More
            </Link>
          </div>

          <div className="flex justify-center items-center order-2">
            <img
              src={vision}
              alt="AI Marketing Plugin"
              className="rounded-3xl w-full max-w-[534px] h-350 w-532 border-2 border-gray-300"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PreviewSection;
