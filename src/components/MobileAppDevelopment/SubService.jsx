import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import centerGradient from "../../../public/svgs/Center2.svg";
import { mobileSubServices, ServiceDescription } from "../Data/MobileApp";

const SubService = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center mt-10 lg:px-10 bg-white">
        <div>
          <img
            src={centerGradient}
            alt="center gradient"
            className="absolute right-0 w-[50rem] -z-10 animate-bounce"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1
            className="font-varino text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px] xl:leading-[60px] text-black"
            data-aos="fade-up"
          >
            IN OUR EXPERTISE
          </h1>
          <p
            data-aos="fade-down"
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-black font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6"
          >
            {ServiceDescription}
          </p>
        </div>

        <div className="flex flex-wrap justify-center py-5 px-5 lg:px-0">
          {mobileSubServices.map((offer, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="rounded-[40px] border-[5px] border-black p-1 w-full sm:w-auto md:w-auto lg:w-[calc(25% - 20px)] max-w-[300px] h-auto mx-2 mb-5"
            >
              <div className="flex flex-col justify-center items-center bg-white h-full w-full rounded-[36px]">
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
