import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";

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

      <ul className="py-4">
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
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border-b border-gray-400 hover:bg-gray-50"
    >
      <div className="flex justify-between py-2 px-3">
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
      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
};

const WatchListAction = ({ uid }) => {
  return (
    <span>
      <span className="flex gap-2 justify-end pb-3">
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="py-1 px-3 bg-green-500 text-white rounded-sm">
            <ShoppingCartIcon />
          </button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="py-1 px-3 bg-red-500 text-white rounded-sm">
            <SellIcon />
          </button>
        </Tooltip>
        <Tooltip title="Chart" placement="top" arrow TransitionComponent={Grow}>
          <button className="py-1 px-3 bg-blue-500 text-white rounded-sm">
            <BarChartIcon />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="py-1 px-3 bg-black text-white rounded-sm">
            <MoreHorizIcon />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
