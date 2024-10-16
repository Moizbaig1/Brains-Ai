import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";

import Pointingup from "../../public/images/pointingup.png";
import Logo from "../../public/images/Brains Labs.png";
import linkedIn from "../../public/svgs/linkedin.svg";
import facebook from "../../public/svgs/facebook.svg";
import whatsapp from "../../public/svgs/whatsapp.svg";
import instagram from "../../public/svgs/insta.svg";
import Gradient1 from "../../public/svgs/gradient1.svg";
import RightGradient from "../../public/svgs/right.svg";

const Footer = () => {
  const navigate = useNavigate(); // Use useNavigate

  const handleContact = () => {
    navigate("/contact"); // Updated navigation method
    console.log("working");
  };

  const List = [
    {
      key: 1,
      name: "Privacy Policy",
      page: "/privacypolicy",
    },
    {
      key: 2,
      name: "Terms and Conditions",
      page: "/termsandconditions",
    },
  ];

  const services = [
    "GENERATIVE AI",
    "MOBILE APP DEVELOPEMENT",
    "WEB 3.0 AND METAVERSE",
    "MODERN SAAS APPLICATIONS",
    "UIUX DESIGN",
    "WORDPRESS PLUGIN DEVELOPEMENT",
  ];

  return (
    <div className="mt-12 relative">
      {/* Gradients */}
      <div className="absolute" style={{ maxWidth: "100%", height: "auto" }}>
        <img
          className="w-[400px] lg:w-[300px] xl:w-full"
          alt="gradient1"
          src={Gradient1}
        />
      </div>
      <div className="absolute right-0">
        <img
          className="w-[400px] lg:w-[300px] xl:w-full"
          alt="gradient1"
          src={RightGradient}
        />
      </div>
      {/* Footer container */}
      <footer>
        <div className="grid lg:grid-cols-3 lg:gap-5 justify-between">
          {/* Footer div 1 */}
          <div className="flex flex-col items-center lg:items-start gap-8 px-7 z-10">
            <div className="flex gap-2 items-center">
              <img
                src={Pointingup}
                alt="Pointingup icon"
                className="h-auto w-12"
              />
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-[300] capitalize text-white font-mono">
                Contact us today!
              </p>
            </div>
            <h1
              className="font-varino text-[26px] sm:text-[35px] font-[400] text-center lg:text-start"
              style={{
                background: "linear-gradient(to bottom, white, gray)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Have questions? Get in touch!
            </h1>
            <button
              onClick={handleContact}
              className="text-center text-white text-[16px] lg:text-lg font-medium cursor-pointer font-monosans capitalize w-full sm:w-[250px] px-6 py-3 bg-sky-500 rounded-[90px] flex justify-center"
            >
              Contact Us Today
            </button>
          </div>
          {/* Footer div 2 */}
          <div className="flex flex-wrap justify-center items-center mt-7">
            <div className="w-auto h-auto flex-col lg:items-start items-center gap-[15px] sm:gap-[15px]">
              <div className="justify-start items-center gap-5 flex mb-5">
                <div className="text-white text-2xl font-bold font-varino capitalize">
                  Services
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="text-white text-md font-medium font-monosans capitalize"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Footer div 3 */}
          <div className="flex justify-center items-start mt-12">
            <div className="flex flex-wrap justify-center items-center">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={Logo}
                  alt="logo"
                  className="w-[100px] h-[40px] xl:w-[130px] xl:h-[60px] lg:w-[110px] lg:h-[55px] md:w-[130px] md:h-[60px] transition-transform duration-200 hover:scale-110 mb-4 rounded-full shadow-md ml-4" // Adjusted sizes
                />

                <div className="flex flex-col justify-start items-center gap-3">
                  {/* <div className="justify-start items-center gap-5 inline-flex w-full">
                    <img src={phone} alt="phone" className="w-[30px] h-[30px]" />
                    <div className="text-white text-md font-medium font-monosans">
                      +92 304 8181449
                    </div>
                  </div> */}
                  <div className="justify-start items-center gap-5 inline-flex w-full">
                    <CiLocationOn className="text-[60px] text-white" />
                    <div className="text-white text-md font-medium font-monosans">
                      US - 2097 Prospect Ave Eastmeadow NY 11554
                    </div>
                  </div>
                  <div className="justify-start items-center gap-5 inline-flex w-full">
                    <CiLocationOn className="text-[100px] text-white" />
                    <div className="text-white font-medium font-monosans">
                      Pakistan - 44000 Brains AI Raja Asad Hameed Shaheed
                      Road, Shamsabad
                    </div>
                  </div>
                  {/* <div className="justify-start items-center gap-5 inline-flex w-full">
                    <img src={clock} alt="clock" className="w-[30px] h-[30px]" />
                    <div className="text-white text-md font-medium font-monosans">
                      Mon-Sat : 9am - 5pm
                    </div>
                  </div> */}
                  <div className="justify-start items-center gap-5 inline-flex w-full">
                    <MdOutlineMarkEmailRead className="text-[35px] text-white font-light" />
                    <div className="text-white text-md font-medium font-monosans ml-[5px]">
                      info@Brains-AI.us
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer div */}
        <div className="p-6 my-3">
          <div className="flex flex-col justify-center gap-3 sm:flex-row h-10 sm:justify-between items-center">
            <div className="text-white text-md font-medium font-monosans hidden sm:block">
              info@Brains-AI.us
            </div>

            <div className="h-[19px] flex gap-4 sm:gap-6 lg:gap-7 xl:gap-9">
              <FooterLinks />
            </div>
            <div className="justify-start items-start gap-3 sm:gap-2 lg:gap-3 xl:gap-5 flex">
              <a
                href="https://www.linkedin.com/company/alright-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-full"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/AlrightTech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-full"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                href="https://wa.me/923048181449"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-full"
              >
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a
                href="https://www.instagram.com/alrighttech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 lg:w-10 lg:h-10 relative bg-sky-500 rounded-full"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-white py-6 px-5 sm:py-8 sm:px-6 mt-8 sm:mt-4 flex flex-col gap-3 items-center sm:flex-row sm:items-center sm:gap-7 lg:gap-8 xl:gap-10">
          <p className="text-white text-[10px] sm:text-[12px] xl:text-[14px] font-monosans group-hover:text-gray-300 transition-colors duration-300 text-center">
            Copyright © 2024 Tess Payments. All rights reserved
          </p>
          <div className="flex gap-4 sm:gap-6 lg:gap-7 xl:gap-9">
            {List.map((value) => (
              <Link
                key={value.key}
                to={value.page}
                className="text-white text-[10px] sm:text-[12px] xl:text-[14px] font-monosans group-hover:text-gray-300 transition-colors duration-300 text-center"
              >
                {value.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
      <a
        href="https://api.whatsapp.com/send?phone=923048181449"
        className="bottom-20 right-10 sm:bottom-14 sm:right-12 fixed bg-[#49E670] rounded-full animate-spin-stop-infinite"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="text-5xl text-white p-2" />
      </a>
    </div>
  );
};

export default Footer;
