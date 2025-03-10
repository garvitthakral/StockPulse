import React from "react";
import { NavLink } from "react-router-dom";

const OpenAcc = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full px-50 mt-5">
      <h1 className="text-4xl text-logo-p font-bold py-5">
        Open a StockPulse account
      </h1>
      <p className="text-lg font-light pb-5">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades
      </p>

      <NavLink
        to={"/Signin"}
        className={
          "bg-logo-s text-white text-xl font-semibold rounded-lg px-4 py-3"
        }
      >
        Sign in for free
      </NavLink>
    </div>
  );
};

export default OpenAcc;
