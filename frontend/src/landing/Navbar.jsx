import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../App";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const links = ["Home", "About", "Pricing", "Support", "Signin"];

  const [isProDrDo, setIsProDrDo] = useState(false);

  const handleProfile = () => {
    setIsProDrDo(!isProDrDo);
  };

  const { user } = useContext(AuthContext);
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
        {user ? (
          <li>
            <NavLink
              to={"http://localhost:5173/"}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-logo-s"
                  : "hover:text-logo-s text-logo-p"
              }
            >
              DashBoard
            </NavLink>
          </li>
        ) : (
          ""
        )}
        <div
          onClick={handleProfile}
          className={
            "flex items-center gap-2 cursor-pointer hover:text-logo-s text-logo-p"
          }
        >
          <AccountCircleIcon />
          <h3>{user ? `${user}` : "demouser"}</h3>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
