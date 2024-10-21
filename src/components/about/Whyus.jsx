import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaCog, FaBookmark, FaComments, FaFileSignature } from "react-icons/fa";
// import { MdCardGiftcard } from "react-icons/md";

const WhyUsData = [
  {
    icon: <FaCog size={60} />,
    heading: "Custom developed solutions",
    detail:
      "Professionally crafted solutions meet your unique needs, ensuring seamless integration and optimal performance.",
  },
  {
    icon: <FaBookmark size={60} />,
    heading: "White-labeled solutions",
    detail:
      "Brains AI Inc provides superior white-labeled solutions with seamless integration and customizable branding for your company.",
  },
  {
    icon: <FaComments size={60} />,
    heading: "Consultation and Advisory",
    detail:
      "Expert Consultation and Advisory Services to help you optimize your plans and achieve long-term success in your endeavors.",
  },
  {
    icon: <FaFileSignature size={60} />,
    heading: "Technical Writing & Content Creation",
    detail:
      "Technical writing and content production of the highest caliber, flawlessly combining experience and creativity to present complicated material with clarity and accuracy",
  },
];

const Whyus = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* Gradient */}
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <img
          className="xl:w-full"
          alt="gradient1"
          src="/path/to/gradient1.svg"
        />
      </div>
      <section className="relative snap-center flex flex-col space-y-4 items-center mt-28">
        {/* Gradient */}
        <div className="animate-bounce absolute right-20 lg:top-96 top-1/3">
          <img
            className="xl:w-full"
            alt="right gradient"
            src="/path/to/right.svg"
          />
        </div>
        <h1
          data-aos="fade-up"
          className="font-varino text-[30px] xl:text-[55px] text-center"
          style={{
            background: "linear-gradient(to bottom, white, gray)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Why Us?
        </h1>
        <p
          data-aos="fade-up"
          className="text-[14px] sm:text-[16px] xl:text-[18px] text-center font-monosans text-white font-extralight w-10/12 md:w-6/12 xl:w-6/12"
        >
          Our team is committed to excellence in driving your success through
          unparalleled expertise, innovative solutions, and a commitment to
          quality.
        </p>

        <div className="grid sm:mx-10 mx-4 grid-cols-1 gap-4 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WhyUsData.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="rounded-[40px] bg-gradient-to-r from-[#EC66B7] to-[#2D5887] p-1 h-[320px] mt-3 xl:-mt-6"
            >
              <div className="bg-[#111424] h-full w-full flex flex-col justify-evenly rounded-[38px] p-5">
                <div className="flex justify-center items-center text-white">
                  {item.icon}
                </div>
                <div className="relative flex flex-col gap-3 mt-3">
                  <p className="font-varino text-[18px] lg:text-[20px] text-center text-white">
                    {item.heading}
                  </p>
                  <p className="font-monosans text-[12px] text-center text-white">
                    {item.detail}
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

export default Whyus;
