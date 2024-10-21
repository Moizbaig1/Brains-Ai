import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../../public/images/Case/card1.png";
import image2 from "../../../public/images/Case/card2.png";
import image3 from "../../../public/images/Case/card3.png";
import centerGradient from "../../../public/svgs/Center2.svg";

const SubService = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  const images = [image1, image2, image3];

  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center lg:px-10 bg-white">
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
            AI Case Study
          </h1>
        </div>

        <div className="flex flex-wrap justify-center py-0 px-5 lg:px-0">
          {images.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="rounded-[40px] border-2 border-black p-1 w-full sm:w-auto md:w-auto lg:w-[calc(25% - 20px)] max-w-[300px] h-auto mx-2"
            >
              <div className="flex justify-center items-center bg-white h-full w-full rounded-[36px]">
                <img
                  src={image}
                  alt={`Case Study ${index + 1}`}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SubService;
