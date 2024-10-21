import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { LuArrowRightSquare } from "react-icons/lu";
import centerGradient from "../../public/svgs/Center2.svg";
import { solItems, solItemDetails, solDescription } from "./Data/Solution";

const OurSolution = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleButtonClick = (id) => {
    const menuItemDetail = solItemDetails?.filter(
      (item) => item?.solItemId === id
    );
    setSelectedMenuItem(menuItemDetail ? menuItemDetail[0] : null);
  };

  useEffect(() => {
    if (solItemDetails) {
      handleButtonClick(1);
    }
    Aos.refresh();
  }, [solItemDetails]);

  return (
    <>
      <section className="relative flex flex-col space-y-4 items-center xl:px-32 bg-black">
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
              background: "linear-gradient(to bottom, white, gray)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Our Solutions Are Applicable for the Following Industries
          </h1>
          <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-8/12 xl:w-8/12 my-3 sm:my-4 lg:my-5 xl:my-6">
            {solDescription}
          </p>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-wrap gap-3 p-3">
          {solItems?.map((menu, index) => (
            <div key={index} className="m-0">
              <button
                className={`px-5 py-2 rounded-full border-2 transition-colors duration-300 m-0 ${
                  selectedMenuItem?.solItemId === menu.id
                    ? "border-black bg-white text-black"
                    : "border-gray-500 bg-transparent text-white"
                }`}
                onClick={() => handleButtonClick(menu.id)}
              >
                {menu?.title}
              </button>
            </div>
          ))}
        </div>

        {/* Selected Menu Item Details */}
        {selectedMenuItem && (
          <div className="flex flex-col justify-start items-start px-4 sm:px-8 lg:px-0">
            <p className="text-[14px] sm:text-[16px] w-[58%] xl:text-[18px] text-start font-monosans text-white font-extralight my-3 sm:my-4 lg:my-5 xl:my-6">
              {selectedMenuItem?.title}
            </p>
            {selectedMenuItem?.text?.map((item, index) => (
              <div key={index} className="w-full flex gap-3 items-center">
                <LuArrowRightSquare color="white" size={22} />
                <p className="text-[14px] sm:text-[16px] xl:text-[18px] text-start font-monosans text-white font-extralight my-2">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default OurSolution;
