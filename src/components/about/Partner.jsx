import React from "react";
import RedButton from "../../../public/images/Partner/RedButton.png";
import Potolo from "../../../public/images/Partner/Potolo.png";
import Hypotech from "../../../public/images/Partner/Hypotech.png";

const Partner = () => {
  return (
    <div className="flex flex-col items-center py-16">
      <h1
        data-aos="fade-up"
        className="font-varino text-2xl sm:text-3xl lg:text-5xl xl:text-6xl text-center text-white mb-8"
      >
        OUR PARTNER
      </h1>

      <p className="text-center text-gray-400 mb-8">
        We collaborate with industry-leading partners to deliver innovative solutions that drive success <br />
        and enhance the value we provide to our clients.
      </p>

      <div className="flex flex-wrap justify-center gap-6 p-6">
        <div className="flex flex-col items-center border-2 border-white p-5 bg-gray-500 rounded-lg shadow-lg w-60 h-60 transition-transform transform hover:scale-105">
          <img src={RedButton} alt="Redbutton.ai logo" className="mb-4 w-24 h-24" />
          <p className="text-center font-semibold text-white">Redbutton.ai</p>
        </div>

        <div className="flex flex-col items-center border-2 border-white p-5 bg-gray-500 rounded-lg shadow-lg w-60 h-60 transition-transform transform hover:scale-105">
          <img src={Hypotech} alt="Hypotech Software logo" className="mb-4 w-24 h-24" />
          <p className="text-center font-semibold text-white">Hypotech Software</p>
        </div>

        <div className="flex flex-col items-center border-2 border-white p-5 bg-gray-500 rounded-lg shadow-lg w-60 h-60 transition-transform transform hover:scale-105">
          <img src={Potolo} alt="Potolo logo" className="mb-4 w-24 h-24" />
          <p className="text-center font-semibold text-white">Potolo</p>
        </div>
      </div>
    </div>
  );
};

export default Partner;
