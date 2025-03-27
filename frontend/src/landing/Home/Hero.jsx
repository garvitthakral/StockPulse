import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center h-125">
        <h2 className="text-5xl">
          <span className="text-logo-s">Track. Analyze. Trade.</span> <br />{" "}
          <span className="text-logo-p">
            Welcome to the future of stock investing!
          </span>
        </h2>
        <img
          src="https://res.cloudinary.com/dtntjxdio/image/upload/v1743102537/arrow_yvcxpu.png"
          alt="arrow"
          className="h-52 md:block absolute top-46 right-103"
        />
        <div className="flex justify-center text-center w-full text-lg mt-10 gap-5 ">
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
