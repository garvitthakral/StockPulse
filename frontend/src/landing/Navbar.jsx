import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = ["Home", "About", "Pricing", "Support", "Signin"];
  return (
    <div className="flex justify-between items-center border-b border-gray-300 mt-3 px-50 shadow-md">
      <NavLink to={"/"}>
        <img
          src="assets\logo\in line logo.png"
          alt="Logo"
          className="h-24 cursor-pointer"
        />
      </NavLink>

      <ul className="flex gap-6 text-2xl">
        {links.map((link, idx) => (
          <li key={idx}>
            <NavLink
              to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-logo-s"
                  : "hover:text-logo-s text-logo-p"
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
