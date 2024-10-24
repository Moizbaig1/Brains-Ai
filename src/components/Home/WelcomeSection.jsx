import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import GlobeSvg from "../../../public/svgs/globe.svg";
import Gradient1 from "../../../public/svgs/gradient1.svg";
import Gradient2 from "../../../public/svgs/gradient2.svg";

const WelcomeSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="snap-center flex flex-col justify-center  items-center mt-0   "
      style={{ padding: "0px" }}
    >
      {/* Gradient divs */}
      {/* <div className="absolute left-0 animate-pulse">
        <img className="xl:w-full" alt="gradient1" src={Gradient1} />
      </div> */}
      {/* <div className="absolute right-0 -top-40 -z-10">
        <img className="xl:w-full" alt="gradient2" src={Gradient2} />
      </div> */}
      {/* End Gradient divs */}

      <div
        className="flex flex-col justify-center items-center text-center"
        data-aos="fade-up"
      >
        <h1 className="font-varino text-xl sm:text-2xl lg:text-xl xl:text-3xl text-center text-white mb-2 mt-6">
          WELCOME TO
        </h1>
        <h1
          data-aos="fade-up"
          className="font-varino text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center text-white mb-8"
          // Uncomment the following lines if you want a gradient effect on the text
          // style={{
          //   background: "linear-gradient(to bottom, white, gray)",
          //   WebkitBackgroundClip: "text",
          //   color: "transparent",
          // }}
        >
          Brains AI !
        </h1>

        <p className="text-[14px] sm:text-[16px] xl:text-[18px] font-mona text-white font-extralight w-11/12 md:w-8/12 lg:w-[78%] xl:w-10/12 my-2">
          Master The Serverless Cloud To Unlock Digital Potential. Developing Concepts
           into Effective Solutions.
        </p>
      </div>

      <div className="relative" data-aos="fade-up">
        <img
          className="xl:w-full max-w-[90%] mb-0 filter grayscale ml-12" // Responsive image
          alt="globe"
          src={GlobeSvg}
          width={900}
          height={900}
        />
        <div className="absolute z-[9999999999999999999999999999]  -top-2 xl:top-6 right-5 left-5 flex justify-center items-center">
          <button className="hover:bg-gray-400 hover:bg-opacity-50 cursor-pointer transition-colors duration-300 inline-flex py-2 lg:py-3 px-5 lg:px-8 justify-center items-center gap-2 flex-shrink-0 bg-gradient-to-r rounded-full border-2 border-white border-opacity-50 shadow-xl mt-4 w-[169px] h-[56px] ">
            <span className="text-white text-[14px] sm:text-[16px] xl:text-[18px]">
              Explore More
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
