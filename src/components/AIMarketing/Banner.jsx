import React, { useEffect } from "react";
import { AIMarket } from "../Data/BannerData";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {AIMarket.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 px-10 gap-8 mt-6 items-center"
        >
          <div className="flex flex-col justify-center gap-4 text-left md:pr-6 -mt-6">
            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="font-varino text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] text-white font-semibold leading-tight capitalize"
            >
              {item.heading}
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              className="font-monosans text-white text-sm md:text-base font-light leading-relaxed max-w-[500px] mb-6"
            >
              {item.description}
            </p>
            <div>
              <Link to="/getQuotes" className="lg:block hidden">
                <div className="bg-[#FFFFFF] text-black px-4 py-2 rounded-3xl me-3 inline-block max-w-[150px] text-center">
                  Get A Quote
                </div>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              data-aos="fade-up"
              src={item.img}
              alt="helping grow"
              className="rounded-3xl p-2 w-full max-w-[534px] h-auto shadow-lg mb-10"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
