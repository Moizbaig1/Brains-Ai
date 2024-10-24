import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Import your images directly using relative paths
import vision from "../../../public/images/vision.png";
import purpleGradient from "../../../public/svgs/purpleGradient.svg";

const MissionAndVision = () => {
    useEffect(() => {
      Aos.init();
    }, []);

  return (
    <>
      <section className="my-10 p-5 lg:p-10 relative">
        {/* Gradient divs */}
        <div className="absolute left-0">
          <img
            className="xl:w-full animate-pulse"
            alt="gradient1"
            src={purpleGradient}
          />
        </div>

        <div className="snap-center flex flex-col space-y-4 my-5 items-center">
          <h1
            data-aos="fade-up"
            className="font-varino text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center text-white mb-8"
            // style={{
            //   background: "linear-gradient(to bottom, white, gray)",
            //   WebkitBackgroundClip: "text",
            //   color: "transparent",
            // }}
          >
            Our mission and vision
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:my-10">
          <div className="flex flex-col gap-7 lg:p-10 order-2">
            <div className="flex flex-col lg:gap-5">
              <h1
                data-aos="fade-up"
                className="font-varino text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center text-white mb-8"
              >
                Our Mission
              </h1>
              <p
                data-aos="fade-up"
                className="font-monosans text-white font-[300]"
              >
                At Brains AI Inc, we are driven by a passion for technological
                excellence that transforms businesses and inspires progress. Our
                mission is to empower our clients with groundbreaking solutions
                that ignite growth and success. By upholding a commitment to
                quality and fostering meaningful partnerships, we strive to be a
                catalyst for positive change, paving the way for innovation in
                the digital realm.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1
                data-aos="fade-up"
                className="font-varino text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center text-white mb-8"
              >
                Our Vision
              </h1>
              <p
                data-aos="fade-up"
                className="font-monosans text-white font-[300]"
              >
                Brains AI Inc envisions a future where we stand as a global technology
                leader, revolutionizing the digital landscape. We aim to
                cultivate a dynamic environment where businesses can seamlessly
                evolve and thrive. Through our dedication to cutting-edge
                solutions and a culture of relentless improvement, we seek to
                drive impactful change, setting new standards of excellence and
                leaving a lasting legacy on the world stage.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <div>
              <img
                data-aos="fade-up"
                src={vision}
                alt="helping grow"
                className="rounded-3xl border boder-4 p-1 w-[100%] max-w-[534px] h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAndVision;

// bg-gradient-to-r from-[#EC66B7] to-[#2D5887]
