import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SidebarDas = () => {
  return (
    <div className="border-r border-gray-500 h-dvh">
      <div className="shadow-xl flex justify-between p-4">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty, ful, weekly, gold, mcx"
          className="border-none outline-none"
        />
        <p className="text-sm text-gray-600">{watchlist.length}/50</p>
      </div>

      <ul>
        {watchlist.map((stock, idx) => {
          return <WatchListItem stock={stock} key={idx} />;
        })}
      </ul>
    </div>
  );
};

export default SidebarDas;

const WatchListItem = ({ stock }) => {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListAction(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <p className={stock.isDown ? "text-red-500" : "text-green-500"}>
          {stock.name}
        </p>
        <div>
          <span>{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="text-red-500" />
          ) : (
            <KeyboardArrowDownIcon className="text-green-500 rotate-180" />
          )}
          <span>{stock.price}</span>
        </div>
      </div>
    </li>
  );
};
