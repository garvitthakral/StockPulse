import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavbarDas = () => {
  const [isProDrDo, setIsProDrDo] = useState(false);

  const handleProfile = () => {
    setIsProDrDo(!isProDrDo);
  }

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
            <img src="assets\image\arrow.png" alt="logo" className="h-13" />
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
          <div onClick={handleProfile} className={"flex items-center gap-2 cursor-pointer"}>
            <AccountCircleIcon/>
            <h3>DemoUser</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDas;
