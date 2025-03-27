import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link, useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../App";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const links = ["Home", "About", "Pricing", "Support", "Signin"];

  const navigate = useNavigate();

  const [isProfile, setIsProfile] = useState(false);

  const handleProfile = () => {
    setIsProfile(true);
  };

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const handleLogout = async (e) => {
    e.preventDefault();
    setIsLoggingOut(true);
    try {
      await fetch("https://stockpulse-backend-079r.onrender.com/logout", {
        method: "POST",
        credentials: "include",
      });
      removeCookie("token", { path: "/" });

      if (setUser) setUser(null);
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (cookies.token && !user) {
      // Handle token/cookie mismatch
      removeCookie("token");
    }
  }, [user, cookies.token]);

  return (
    <div className="flex justify-between items-center border-b border-gray-300 mt-3 px-50 shadow-md">
      <NavLink to={"/"}>
        <img
          src="/public/assets/logo/inlinelogo.png"
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
          <>
            <li>
              <NavLink
                to={"https://stockpulse-dashboard.onrender.com"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-logo-s"
                    : "hover:text-logo-s text-logo-p"
                }
              >
                DashBoard
              </NavLink>
            </li>
            <div
              onClick={handleProfile}
              className={
                "flex items-center gap-2 cursor-pointer hover:text-logo-s text-logo-p"
              }
            >
              <AccountCircleIcon />
              <h3>{user ? `${user}` : "demouser"}</h3>
            </div>
          </>
        ) : (
          ""
        )}
      </ul>
      {isProfile && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800/40">
          <div className="bg-white text-logo-l p-4 rounded relative w-full max-w-80">
            <h1 className="text-4xl font-semibold text-logo-p py-6 px-2">
              User: {user}
            </h1>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="text-lg font-bold bg-logo-p text-white py-2 px-4 hover:shadow-lg cursor-pointer"
            >
              {isLoggingOut ? "Logging out..." : "LogOut"}
            </button>
            <ClearIcon
              className="cursor-pointer absolute top-4 right-4 w-4"
              onClick={() => setIsProfile(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
