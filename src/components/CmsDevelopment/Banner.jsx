import React, { useEffect } from "react";
import { CmsDevelopment } from "../Data/BannerData";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      {CmsDevelopment.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 px-10 gap-3 mt-10"
        >
          <div className="flex flex-col justify-center gap-3">
            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="font-varino text-[1.5rem] lg:text-[2.1rem] text-white font-[400] capitalize"
            >
              {item.heading}
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              className="font-monosans text-white text-sm font-thin"
            >
              {item.description}
            </p>
            
          </div>

          {/* Image */}
          <div>
            <img
              data-aos="fade-up"
              src={item.img}
              alt="helping grow"
              className="rounded-3xl p-1 w-[100%] max-w-[534px] h-auto"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
