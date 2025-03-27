import React from "react";
import { NavLink } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";

const Pricing = () => {
  return (
    <div className="px-50 flex pt-22 items-center">
      <div className="w-6/12">
        <h1 className="text-5xl font-semibold text-logo-p py-3">
          Unbeatable pricing
        </h1>
        <p className="text-xl font-light pb-4 pt-2">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
        <NavLink
          to={"/pricing"}
          className={"text-logo-s font-semibold text-lg"}
        >
          See Pricing <EastIcon />
        </NavLink>
      </div>
      <div className="w-6/12">
        <img src="/public/assets/image/pricing.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Pricing;
