import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../../public/images/Explore/card1.png";
import image2 from "../../../public/images/Explore/card2.png";
import image3 from "../../../public/images/Explore/card3.png";

const SubService = () => {

    useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);
    
      const images = [
        {
          src: image1,
          title:
            "SEO ARTICLE GENERATION",
          desc: "The plugin connects to your website and generates off-page SEO optimized articles to boost your rankings.",
        },
        {
          src: image2,
          title: "MEDIA DISTRIBUTION",
          desc: " The plugin automatically distributes these articles across major international media platforms to enhance your visibility.",
        },
        {
          src: image3,
          title:
            "PERFORMANCE MONITORING ",
          desc: "The system generates detailed reports to track the performance of your SEO and media campaigns.",
        },
        
      

      ];

  return (
    <div>
      <section className="relative flex flex-col space-y-4 items-center lg:px-10 bg-white">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="font-varino text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px] xl:leading-[60px] text-black mt-10"
            data-aos="fade-up"
          >
           HOW ITS WORK
          </h1>
          <p
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-black font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore technology to learn about new ideas, fashions, and game-changing discoveries that define  the digital world.
          </p>
        </div>

        <div className="flex flex-wrap justify-center py-0 px-0 lg:px-0">
          {images.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-[20px] border-[5px] border-black p-1 w-full sm:w-auto md:w-auto lg:w-[calc(25% - 20px)] max-w-[300px] h-auto mx-2 mt-5 mb-10 overflow-hidden"
            >
              <div className="flex flex-col items-start p-4">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-contain mb-4"
                />
                <h3 className="font-varino text-left text-black text-md font-semibold mb-3 ">
                  {image.title}
                </h3>
                <p className="text-left text-black text-sm leading-6">
                  {image.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  )
}

export default SubService
