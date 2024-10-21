import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from "../../public/images/Explore/card1.png";
import image2 from "../../public/images/Explore/card2.png";
import image3 from "../../public/images/Explore/card3.png";

const ExplorePage = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  const images = [
    {
      src: image1,
      title:
        "Build Value for your Business with a Better Mobile User Experience (UX)",
      desc: "We help uncover use cases for generative AI in your organization. Through feasibility studies, we evaluate the viability and impact of implementing generative AI solutions.",
    },
    {
      src: image2,
      title: "Service Design and Product Design a Comprehensive Style Guide",
      desc: "We thoroughly evaluate various generative AI technologies and tools, examining their capabilities and suitability for your organization’s unique needs.",
    },
    {
      src: image3,
      title:
        "How Do Businesses Benefit by Moving to Single Page Applications ",
      desc: "We collaborate closely with your organization to seamlessly integrate generative AI applications into your current systems and workflows.",
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
            EXPLORE TECHNOLOGY
          </h1>
          <p
            className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-black font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore Technology To Learn About new Ideas, Fashions, And
            Game-Changing Discoveries That Define And Alter The digital World.
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

        <div className="flex justify-center mt-10">
          <button
            className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition duration-300 mb-10"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore More
          </button>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
 