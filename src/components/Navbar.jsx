import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { IoIosArrowRoundForward } from "react-icons/io";
import Logo from '../../public/images/deep-ai.png'
import { SelectedIcon } from "../icons"; // Update path as needed
import Links from "./HeaderLinks";

const services = [
  { id: 0, name: "Social Media Marketing", subservice: [], link: "/social-media-services" },
  { id: 1, name: "GENERATIVE AI", subservice: ["Generative AI Development", "Natural Language Processing (NLP)", "AI Chatbot Development", "Retrieval-Augmented Generation (RAG)"], link: "/generativeai" },
  { id: 2, name: "WEB DEVELOPMENT", subservice: ["Front End Development", "Backend Development", "Modern Saas Applications"], link: "/fullstackdevelopment" },
  { id: 3, name: "MOBILE APP DEVELOPMENT", subservice: ["Custom App Development", "Flutter App Development"], link: "/mobileappdevelopment" },
  { id: 5, name: "WEB 3.0 METAVERSE", subservice: ["Generative AI Development", "Natural Language Processing (NLP)", "AI Chatbot Development", "Retrieval-Augmented Generation (RAG)"], link: "/webandmetaverse" },
  { id: 6, name: "UI/UX DESIGN", subservice: ["UI Design", "UX Research"], link: "/uiuxdesign" },
  { id: 7, name: "CMS DEVELOPMENT", subservice: ["Wordpress Development", "Shopify Development", "Ecommerce Web Development", "QA/Testing Services"], link: "/cmsdevelopment" },
  { id: 8, name: "DIGITAL MARKETING", subservice: ["SEO", "Content Marketing"], link: "/digitaldevelopment" },
];

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [more, setMore] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const ref = useRef();
  const serviceRef = useRef();

  useEffect(() => {
    setSelectedService(services[0]);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const SettingMenu = () => {
    setMore((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setMore(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[120px] h-[45px] sm:w-[130px] sm:h-[50px] xl:w-[161.461px] xl:h-[72.95px]"
          />
        </Link>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-10"
        >
          <Bars3Icon className="h-8 w-8 text-gray-400" />
        </button>

        <div className={`w-full lg:block lg:w-auto ${isDropdownOpen ? "block" : "hidden"}`}>
          <div className="font-monospace font-medium justify-center items-center space-y-4 lg:space-y-0 flex flex-col p-4 lg:p-0 mt-4  rounded-lg lg:flex-row lg:space-x-8">
            <Links SettingMenu={SettingMenu} ref={ref} more={more} />
            <div className="block lg:hidden cursor-pointer">
              <div className="bg-[#00A7E1] hover:bg-[#00749C] px-[30px] py-[7px] rounded-3xl flex justify-center items-center">
                <p className="text-[20px] font-monosans text-[#fff]">Book a Free Consultation</p>
              </div>
            </div>
          </div>
        </div>

        <Link to="/getQuotes" className="lg:block hidden cursor-pointer">
          <div className="bg-[#00A7E1] hover:bg-[#00749C] px-10 py-3 lg:px-[28px] lg:py-[6px] xl:px-[30px] xl:py-[7px] rounded-3xl flex justify-center items-center">
            <p className="lg:text-[18px] xl:text-[20px] font-monosans text-[#fff]">Book a Free Consultation</p>
          </div>
        </Link>
      </div>

      {more && (
        <div className="w-full flex justify-center">
          <div className="bg-white backdrop-blur-lg md:w-3/4 w-11/12 mx-auto z-10 font-monosans flex flex-col border rounded-lg absolute top-24">
            <div className="text-white flex flex-col items-center py-8">
              <div className="container mx-auto p-4 flex flex-col md:flex-row">
                {/* Left Section */}
                <div className="md:w-1/3 p-4 mr-6">
                  <h2 className="text-3xl font-bold mb-8">SERVICES</h2>
                  <img className="object-cover border-2 rounded-lg" src="/images/generativeai/service-image.png" alt="serviceImage" />
                  <p className="text-sm mt-8 opacity-85">
                    Explore our comprehensive services tailored to your needs. We excel in providing industry-standard solutions.
                  </p>
                </div>
                {/* Right Section */}
                <div className="md:w-4/5 p-4">
                  <h2 className="text-3xl font-bold mb-6">SERVICES</h2>
                  <ul className="flex flex-col sm:flex-row">
                    <div className="space-y-4">
                      {services.map((service, index) => (
                        <li key={index} className="flex md:flex-row flex-col justify-between items-start">
                          <div className="group relative" ref={serviceRef} onMouseEnter={() => setSelectedService(service)}>
                            <Link to={service.link}>
                              <span className="font-varino text-sm">{service.name}</span>
                            </Link>
                            {selectedService?.id === service.id && <SelectedIcon />}
                          </div>
                        </li>
                      ))}
                    </div>
                    <div className="flex flex-col justify-start items-start mt-5">
                      {selectedService?.subservice?.map((item, index) => (
                        <div key={index} className="flex gap-3 items-center">
                          <IoIosArrowRoundForward className="text-3xl" />
                          <Link to={selectedService.link} className="font-monosans text-sm">{item}</Link>
                        </div>
                      ))}
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
