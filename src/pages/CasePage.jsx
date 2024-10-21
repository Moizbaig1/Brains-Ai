import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import image1 from '../../public/images/Case/card1.png'
import image2 from '../../public/images/Case/card2.png'
import image3 from '../../public/images/Case/card3.png'


const CasePage = () => {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  const images = [image1, image2, image3];

  return (
    <div>
      <section className="relative flex flex-col space-y-4 items-center lg:px-10 bg-white">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="font-varino text-[25px] xl:text-[54px] text-center capitalize lg:leading-[35px] xl:leading-[60px] text-black mt-10"
            data-aos="fade-up"
          >
            UIUX DESIGN CASE STUDIES
          </h1>
        </div>

        <div className="flex flex-wrap justify-center py-0 px-0 lg:px-0">
          {images.map((image, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="rounded-[40px] border-[5px] border-black p-0 w-full sm:w-auto md:w-auto lg:w-[calc(25% - 20px)] max-w-[300px] h-auto mx-2 mt-7 mb-10 overflow-hidden"
            >
              <div className="flex justify-center items-center bg-gray-300 h-[250px] w-full rounded-[36px] overflow-hidden">
                <img
                  src={image}
                  alt={`Case Study ${index + 1}`}
                  className="w-[80%] h-[80%] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CasePage;