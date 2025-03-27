import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-125">
        <img
          src="https://res.cloudinary.com/dtntjxdio/image/upload/v1743108708/hero2_c3f9vq.png"
          alt="arrow"
          className=""
        />
        <div className="flex justify-center text-center w-full text-lg  gap-5 ">
          <NavLink
            to={"/signin"}
            className="px-5 py-2 bg-logo-s text-white rounded-xl shadow-xl cursor-pointer"
          >
            Get Started <ArrowForwardIosIcon />
          </NavLink>
          <NavLink
            to={"/about"}
            className="px-5 py-2 text-logo-s shadow-xl rounded-xl cursor-pointer"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Hero;
