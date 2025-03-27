import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthContext } from "../App";
import { useCookies } from "react-cookie";
import ClearIcon from "@mui/icons-material/Clear";

const NavbarDas = () => {
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
    <div className="flex shadow-2xl">
      <div className="w-4/12 pl-13 pr-4 py-4 flex text-sm border-r border-gray-400">
        <p className="w-6/12">
          <span className="font-semibold">NIFTY 50</span>
          <span className="text-red-600"> 18181.75</span>
          <span className="pr-1 text-gray-500"> -104.75 (-0.5%)</span>
        </p>
        <p className="w-6/12">
          <span className="font-semibold">SENSEX</span>
          <span className="text-red-600"> 61560.64</span>
          <span className="text-gray-500"> -371.83 (-0.60%)</span>
        </p>
      </div>
      <div className="w-8/12 px-4 pr-14 flex items-center justify-between">
        <div>
          <NavLink to={"/"}>
            <img src="/public/assets/image/arrow.png" alt="logo" className="h-13" />
          </NavLink>
        </div>
        <div className="flex gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-logo-s font-semibold"
                : "text-gray-500 font-light"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive
                ? "text-logo-s font-semibold"
                : "text-gray-500 font-light"
            }
          >
            Orders
          </NavLink>
          <NavLink
            to={"/holdings"}
            className={({ isActive }) =>
              isActive
                ? "text-logo-s font-semibold"
                : "text-gray-500 font-light"
            }
          >
            Holdings
          </NavLink>
          <NavLink
            to={"/positions"}
            className={({ isActive }) =>
              isActive
                ? "text-logo-s font-semibold"
                : "text-gray-500 font-light"
            }
          >
            Positions
          </NavLink>
          <NavLink
            to={"/funds"}
            className={({ isActive }) =>
              isActive
                ? "text-logo-s font-semibold"
                : "text-gray-500 font-light"
            }
          >
            Funds
          </NavLink>
          {user ? (
            <div
              onClick={handleProfile}
              className={"flex items-center gap-2 cursor-pointer"}
            >
              <AccountCircleIcon />
              <h3>{user ? `${user}` : "demouser"}</h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
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

export default NavbarDas;
