import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import HeaderLinks from "./HeaderLinks"; // Import HeaderLinks

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <Link to="/">
          <img
            src="/images/deep-ai.png" // Assuming the logo is in public/images
            alt="logo"
            className="w-[120px] h-[45px] sm:w-[130px] sm:h-[50px] xl:w-[161.461px] xl:h-[72.95px]"
          />
        </Link>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 z-10"
        >
          <HiMenu className="h-8 w-8 text-gray-400" />
        </button>

        <div
          className={`w-full lg:block lg:w-auto ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          <HeaderLinks />
        </div>

        {/* Book a Free Consultation Button */}
        <Link to="/getQuotes" className="lg:block hidden cursor-pointer">
          <div className="bg-[#00A7E1] hover:bg-[#00749C] px-10 py-3 lg:px-[28px] lg:py-[6px] xl:px-[30px] xl:py-[7px] rounded-3xl flex justify-center items-center">
            <p className="lg:text-[18px] xl:text-[20px] font-monosans text-[#fff]">
              Book a Free Consultation
            </p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
