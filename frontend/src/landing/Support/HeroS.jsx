import React from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const HeroS = () => {
  return (
    <div className="bg-logo-p p-12 text-white">
      <div className="px-50">
        <div className="flex items-center justify-between py-8">
          <h2 className="text-3xl font-semibold">Support Portal</h2>
          <NavLink
            to={"https://youtu.be/xvFZjo5PgG0"}
            className={"text-lg underline hover:no-underline"}
          >
            Track ticket
          </NavLink>
        </div>
        <div className="flex">
          <div className="w-6/12">
            <h1 className="text-3xl pb-6">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="flex items-center bg-white rounded-md p-2.5 w-full">
              <input
              className="w-full padding  text-black"
                type="text"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              />
              <SearchIcon className="cursor-pointer text-logo-p" />
            </div>
            <div className="flex flex-wrap gap-8 pt-8 ">
              <NavLink className={"underline hover:no-underline"}>Track account opening</NavLink>
              <NavLink className={"underline hover:no-underline"}>Track segment activation</NavLink>
              <NavLink className={"underline hover:no-underline"}>Intraday margins</NavLink>
              <NavLink className={"underline hover:no-underline"}>Kite user manual</NavLink>
            </div>
          </div>
          <div className="w-6/12 px-10 py-10">
            <h2 className="text-3xl pb-4">Featured</h2>
            <ol className="px-8">
              <li>
                <NavLink>Surveillance measure on scrips - March 2025</NavLink>
              </li>
              <li>
                <NavLink>
                  Latest Intraday leverages and Square-off timings
                </NavLink>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroS;
