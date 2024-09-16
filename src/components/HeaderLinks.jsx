import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SelectedIcon from "../icons/selected-icon";

const HeaderLinks = ({ isMobile }) => {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation(); // Get the current location

  // List of services with subservices
  const services = [
    {
      id: 0,
      name: "Social Media Marketing",
      subservice: [],
      link: "/social-media-services",
    },
    {
      id: 1,
      name: "GENERATIVE AI",
      subservice: [
        "Generative AI Development",
        "Natural Language Processing (NLP)",
        "AI Chatbot Development",
        "Retrieval-Augmented Generation (RAG)",
      ],
      link: "/generativeai",
    },
    {
      id: 2,
      name: "WEB DEVELOPMENT",
      subservice: [
        "Front End Development",
        "Backend Development",
        "Modern Saas Applications",
      ],
      link: "/fullstackdevelopment",
    },
    {
      id: 3,
      name: "MOBILE APP DEVELOPMENT",
      subservice: ["Custom App Development", "Flutter App Development"],
      link: "/mobileappdevelopment",
    },
    {
      id: 5,
      name: "WEB 3.0 METAVERSE",
      subservice: [
        "Generative AI Development",
        "Natural Language Processing (NLP)",
        "AI Chatbot Development",
        "Retrieval-Augmented Generation (RAG)",
      ],
      link: "/webandmetaverse",
    },
    {
      id: 6,
      name: "UI/UX DESIGN",
      subservice: ["UI Design", "UX Research"],
      link: "/uiuxdesign",
    },
    {
      id: 8,
      name: "DIGITAL MARKETING",
      subservice: ["SEO", "Content Marketing"],
      link: "/digitaldevelopment",
    },
  ];

  // List of header links
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "#", isDropdown: true }, // Services link with dropdown
    { name: "Contact", path: "/contact" },
  ];

  // Toggle the dropdown menu for services
  const toggleServicesDropdown = () => {
    setServicesOpen((prev) => !prev);
  };

  // Handle service link click to show/hide subservices
  const handleServiceClick = (service) => {
    setSelectedService((prev) => (prev?.id === service.id ? null : service));
    setServicesOpen(false); // Close dropdown when a service is clicked
  };

  // Handle mouse enter and leave to show subservices
  const handleMouseEnter = (service) => {
    setHoveredService(service);
  };

  const handleMouseLeave = () => {
    setHoveredService(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
        setSelectedService(null);
        setHoveredService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col" : "lg:flex-row"
      } items-center space-y-4 lg:space-y-0 lg:space-x-8`}
      ref={dropdownRef} // Attach ref to the container
    >
      {/* Header Links */}
      {links.map((link) => (
        <div key={link.path} className="">
          {link.isDropdown && !isMobile ? (
            <>
              <button
                onClick={toggleServicesDropdown}
                className="cursor-pointer flex items-center gap-1 text-white font-monosans"
              >
                <h1>{link.name}</h1>
                {isServicesOpen ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="bg-[#111424] text-white backdrop-blur-md shadow-lg w-full md:w-3/4 mx-auto z-10 font-monosans flex flex-col border rounded-lg absolute top-24 left-[50%] translate-x-[-50%] mt-2 p-4">
                  <div className="flex flex-col items-center py-8">
                    <div className="container mx-auto p-4 flex flex-col md:flex-row">
                      {/* Left Section */}
                      <div className="md:w-1/3 p-4 mr-6">
                        <h2 className="text-3xl font-bold mb-8">SERVICES</h2>
                        <img
                          className="object-cover border-2 rounded-lg"
                          src="/images/generativeai/service-image.png"
                          alt="serviceImage"
                        />
                        <p className="text-sm mt-8">
                          Explore our comprehensive services tailored to your
                          needs. We excel in providing industry-standard
                          solutions.
                        </p>
                      </div>

                      {/* Right Section */}
                      <div className="md:w-2/3 p-4">
                        <h2 className="text-3xl font-bold mb-6">SERVICES</h2>
                        <ul className="flex flex-col sm:flex-row">
                          <div className="space-y-4">
                            {services.map((service) => (
                              <li
                                key={service.id}
                                className="flex md:flex-row flex-col justify-between items-start"
                              >
                                <div
                                  className="group relative"
                                  onClick={() => handleServiceClick(service)}
                                  onMouseEnter={() => handleMouseEnter(service)}
                                  onMouseLeave={handleMouseLeave}
                                >
                                  <Link
                                    to={service.link}
                                    className="hover:text-blue-500 flex items-center"
                                  >
                                    <span className="font-varino text-sm">
                                      {service.name}
                                    </span>
                                    {selectedService?.id === service.id && (
                                      <SelectedIcon className="ml-2" />
                                    )}
                                  </Link>
                                </div>
                              </li>
                            ))}
                          </div>

                          {/* Subservice Display */}
                          {hoveredService && (
                            <div className="flex flex-col justify-start items-start mt-5">
                              {hoveredService.subservice.map((sub, index) => (
                                <div
                                  key={index}
                                  className="flex gap-3 items-center"
                                >
                                  <IoIosArrowRoundForward className="text-3xl" />
                                  <Link
                                    to={hoveredService.link}
                                    className="font-monosans text-sm hover:text-blue-500"
                                  >
                                    {sub}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center">
              <Link
                to={link.path}
                className={`text-white font-monosans hover:text-blue-500 flex items-center ${
                  location.pathname === link.path ? "text-blue-500" : ""
                }`}
              >
                {link.name}
              </Link>
              {location.pathname === link.path && (
                <SelectedIcon className="mt-1" /> // Positioned below the link
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderLinks;
