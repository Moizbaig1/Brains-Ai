import React, { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom"; // Use react-router-dom for navigation
import { SelectedIcon } from "../../icons";

function DropDownMenu({ closeDropdown }) {
  const List = [
    { name: "Portfolio", path: "/portfolio" },
    { name: "Our Product", path: "/ourproducts" },
    { name: "Blogs", path: "/blogs" },
    { name: "Career", path: "/career" },
    // { name: "Our Gallery", path: "/ourgallery" },
    // { name: "Our Team", path: "/ourteam" },
  ];

  const ref = useRef();
  const [more, setMore] = useState(false);
  const location = useLocation(); // Use react-router-dom to get current path

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
  }, []);

  const handleMenuToggle = () => {
    setMore((prev) => !prev);
  };

  return (
    <div className="relative" onClick={handleMenuToggle} ref={ref}>
      {more && (
        <div
          className="bg-black backdrop-blur-lg lg:w-[160px] xl:w-[180px] z-10 font-monosans group-hover:text-gray-300 transition-colors duration-300 lg:space-y-3 xl:space-y-3 flex flex-col p-5 border rounded-lg absolute top-10 left-0"
          style={{
            background: "linear-gradient(to bottom, white, gray)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {List.map((value) => (
            <Link
              className="relative"
              key={value.name}
              to={value.path} // Use react-router-dom Link component
              onClick={closeDropdown}
            >
              <div className="group text-white">
                <p className="font-monosans group-hover:text-gray-300 transition-colors duration-300 pb-1 font-medium">
                  {value.name}
                </p>
                <div
                  className={`absolute -bottom-1 transition-opacity duration-300 ${
                    location.pathname !== value.path
                      ? "opacity-0 group-hover:opacity-100"
                      : ""
                  }`}
                >
                  <SelectedIcon />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
