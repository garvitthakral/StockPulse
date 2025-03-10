import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full px-50 mt-5">
      <h1 className="text-4xl text-logo-p font-bold py-5">404</h1>
      <p className="text-lg font-light pb-5">Page Not Found</p>

      <NavLink
        to={"/"}
        className={
          "bg-logo-s text-white text-xl font-semibold rounded-lg px-4 py-3"
        }
      >
        Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
