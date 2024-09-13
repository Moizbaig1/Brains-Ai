import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DropDownMenu from "./dropdownmenu/DropDownMenu";
import { SelectedIcon } from "../icons";
import { useLocation } from "react-router-dom";

const Links = ({ SettingMenu, more, closeDropdown }) => {
  const location = useLocation();
  const activePath = location.pathname;

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {links.map(({ name, path }) => {
        return name.toLowerCase() === "services" ? (
          <div
            className="hidden lg:block relative text-center"
            onClick={SettingMenu}
            key={name}
          >
            <div className="cursor-pointer">
              <h1
                className="text-white font-monosans group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-1"
              >
                <span>{name}</span>
                {more ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
              </h1>
            </div>
          </div>
        ) : (
          <a className="relative" key={name} href={path}>
            <div className="group">
              <p className="text-white font-monosans group-hover:text-gray-300 transition-colors duration-300">
                {name}
              </p>
              <div
                className={`absolute -bottom-1 transition-opacity duration-300 ${
                  activePath !== path ? "opacity-0 group-hover:opacity-100" : ""
                }`}
              >
                <SelectedIcon />
              </div>
            </div>
          </a>
        );
      })}
      <DropDownMenu closeDropdown={closeDropdown} />
    </>
  );
};

export default Links;
