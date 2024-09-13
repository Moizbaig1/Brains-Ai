import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SelectedIcon } from "../icons";

const FooterLinks = () => {
  const { pathname } = useLocation(); // Use React Router's useLocation hook

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    // {
    //   name: "Portfolio",
    //   path: "/portfolio",
    // },
    // {
    //   name: "Our Product",
    //   path: "/ourproducts",
    // },
    // {
    //   name: "Blogs",
    //   path: "/blogs",
    // },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {links.map(({ name, path }) => (
        <Link className="relative hidden lg:block" key={name} to={path}>
          <div className="group">
            <p className="text-white lg:text-[14px] xl:text-[16px] font-monosans group-hover:text-gray-300 transition-colors duration-300">
              {name}
            </p>
            <div
              className={`absolute -bottom-3 transition-opacity duration-300 ${
                pathname !== path ? "opacity-0 group-hover:opacity-100" : ""
              }`}
            >
              <SelectedIcon />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FooterLinks;
