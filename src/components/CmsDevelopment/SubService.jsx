import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import purpleGradient from "../../../public/svgs/purpleGradient.svg";
import centerGradient from "../../../public/svgs/Center2.svg";
import { digitalSubServices, ServiceDescription } from "../Data/Digital";

const SubService = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center bg-white lg:px-10">
        <div>
          <img
            src={centerGradient}
            alt="center gradient"
            className="absolute right-0 w-[50rem] -z-10 animate-bounce"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1
            className="font-varino text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px] xl:leading-[60px]"
            style={{
              color: "black", // Set text color to black
            }}
            data-aos="fade-up"
          >
            Subservices
          </h1>
          <p
            data-aos="fade-down"
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-black font-extralight w-10/12 md:w-8/12 xl:w-8/12"
          >
            {ServiceDescription}
          </p>
        </div>

        <div className="flex flex-wrap justify-center py-5 px-5 lg:px-0">
          {digitalSubServices.map((offer, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="rounded-[40px] border-2 border-black p-1 w-full sm:w-auto md:w-auto lg:w-[calc(25% - 20px)] max-w-[300px] h-auto mx-2 mb-5"
            >
              <div className="flex flex-col justify-center items-center bg-white h-full w-full back rounded-[36px]">
                <div className="px-2 relative flex flex-col items-center justify-center py-[16px] space-y-3 z-20">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="object-cover"
                  />
                  <p className="font-varino text-[18px] text-center text-black">
                    {offer.title}
                  </p>
                  <p className="font-monosans text-[12px] text-center text-black px-[15px]">
                    {offer.description}
                  </p>
                  <img
                    className="absolute -top-3 rounded-3xl -z-10 w-full h-full"
                    alt="cardBG"
                    src={purpleGradient}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SubService;