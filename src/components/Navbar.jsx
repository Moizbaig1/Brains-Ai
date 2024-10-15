import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SelectedIcon } from "../icons"; // Adjust the import as needed
import logo from "../../public/images/Brains Labs.png"; // Adjust your image path accordingly

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

const Navbar = () => {
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  // const [more, setMore] = useState(false);

  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation(); // React Router's hook to get the current path
  const menuRef = useRef(null);
  // const dropdownRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (
  //       menuRef.current &&
  //       !menuRef.current.contains(e.target) &&
  //       dropdownRef.current &&
  //       !dropdownRef.current.contains(e.target)
  //     ) {
  //       setMore(false);
  //       setDropdownOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

  // const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  // const SettingMenu = () => setMore((prev) => !prev);

  useEffect(() => {
    setSelectedService(services[0]); // Default selected service
  }, []);

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-auto h-auto max-w-[120px] sm:max-w-[130px] max-h-[50px]"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          // onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center lg:hidden text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
        >
          <Bars3Icon className="h-8 w-8 text-gray-400" />
        </button>

        {/* Links Section */}
        <div
          className={`w-full lg:block lg:w-auto `}
          // isDropdownOpen ? "block" : "hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-5">
            {/* Links */}
            <Links
              // more={more} , //SettingMenu={settingMenu}
              menuRef={menuRef}
              location={location}
            />

            {/* Consultation Button for mobile */}
            <div className="block lg:hidden">
              <Link
                to="/getQuotes"
                className="bg-[#00A7E1] text-white px-[30px] py-[7px] rounded-3xl"
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Consultation Button for desktop */}
        <Link to="/getQuotes" className="lg:block hidden">
          <div className="bg-[#00A7E1] text-white px-[30px] py-[7px] rounded-3xl">
            Book a Free Consultation
          </div>
        </Link>
      </div>

      {/* Dropdown for Services */}
      {/* {more && (
        <div className="w-full flex justify-center">
          <div
            className="text-white backdrop-blur-lg md:w-3/4 w-11/12 mx-auto z-10 flex flex-col border rounded-lg absolute top-24 p-8"
            ref={dropdownRef}
          >
            <div className="container mx-auto flex flex-col md:flex-row"> */}
      {/* Left side */}
      {/* <div className="md:w-1/3 p-4 mr-6">
                <h2 className="text-3xl font-bold mb-8">SERVICES</h2>
                <div className="w-full h-auto bg-cover bg-center rounded-lg mb-4">
                  <img
                    className="object-cover border-2 rounded-lg"
                    src="/images/generativeai/service-image.png"
                    alt="Service"
                  />
                </div>
                <p className="text-sm opacity-85">
                  Explore our comprehensive services tailored to your needs. We
                  excel in providing industry-standard solutions.
                </p>
              </div> */}

      {/* Right side */}
      {/* <div className="md:w-4/5 p-4">
                <h2 className="text-3xl font-bold mb-6">SERVICES</h2>
                <ul className="flex flex-col sm:flex-row">
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        className="flex flex-col md:flex-row justify-between items-start"
                      >
                        <div
                          className="group relative hover:cursor-pointer"
                          onMouseEnter={() => setSelectedService(service)}
                        >
                          <Link to={service.link} onClick={SettingMenu}>
                            <span className="inline-block relative opacity-85 text-sm">
                              {service.name}
                            </span>
                          </Link>
                          {selectedService?.id === service.id && (
                            <div className="absolute w-full -bottom-1 transition-opacity opacity-100">
                              <SelectedIcon />
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </div> */}

      {/* Subservices */}
      {/* <div className="flex flex-col sm:mt-0 mt-5">
                    {selectedService?.subservice?.map((item, index) => (
                      <div key={index} className="flex gap-3 items-center">
                        <IoIosArrowRoundForward className="text-3xl opacity-75" />
                        <Link
                          to={selectedService.link}
                          className="text-sm opacity-75"
                        >
                          {item}
                        </Link>
                      </div>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </nav>
  );
};

const Links = ({ menuRef, location }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "AI Software Brains", path: "/AiSoftwareBrains" },
  ];

  return (
    <>
      {/* {links.map(({ name, path }) => (
        <div
          key={name}
          className="relative"
          ref={name === "Services" ? menuRef : null}
        >
          {name === "Services" ? (
            <div className="hidden lg:block relative" onClick={SettingMenu}>
              <h1 className="cursor-pointer text-white flex items-center gap-1">
                {name}
                {more ? <FaChevronUp /> : <FaChevronDown />}
              </h1>
            </div>
          ) :  */}
      {links.map(({ name, path }) => (
        <div key={name} className="relative">
          <Link to={path} className="relative">
            <p className="text-white">{name}</p>
            {location.pathname === path && (
              <div className="absolute -bottom-2 w-full">
                <SelectedIcon />
              </div>
            )}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Navbar;
