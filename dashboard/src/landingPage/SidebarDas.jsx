import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import Confetti from "react-confetti";

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
  
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSellPopup, setShowSellPopup] = useState(false);
  const [buyDetails, setBuyDetails] = useState({
    qty: 0,
    price: 0.0,
  });
  const [sellDetails, setSellDetails] = useState({
    qty: 0,
    price: 0.0,
  });

  const handleBuy = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: buyDetails.qty,
      price: buyDetails.price,
      mode: "BUY"
    });
    setShowPopup(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }
  const handleSell = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: sellDetails.qty,
      price: sellDetails.price,
      mode: "SELL"
    });
    setShowSellPopup(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 8000);
  }

  return (
    <>
      {showConfetti && <Confetti/>}
      <span>
        <span className="flex gap-2 justify-end pb-3">
          <Tooltip
            title="Buy (B)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="py-1 px-3 bg-green-500 text-white rounded-sm"
            onClick={() => setShowPopup(true)}>
              <ShoppingCartIcon />
            </button>
          </Tooltip>
          <Tooltip
            title="Sell (S)"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="py-1 px-3 bg-red-500 text-white rounded-sm" 
            onClick={() => setShowSellPopup(true)}>
              <SellIcon />
            </button>
          </Tooltip>
          <Tooltip
            title="Chart"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="py-1 px-3 bg-blue-500 text-white rounded-sm">
              <BarChartIcon />
            </button>
          </Tooltip>
          <Tooltip
            title="More"
            placement="top"
            arrow
            TransitionComponent={Grow}
          >
            <button className="py-1 px-3 bg-black text-white rounded-sm">
              <MoreHorizIcon />
            </button>
          </Tooltip>
        </span>
      </span>
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center
            bg-gray-800/40"
        >
          <div className="bg-white text-logo-l p-4 rounded relative w-full max-w-80">
            <h1 className="text-xl font-semibold mb-4">{uid}</h1>
            <div className="mb-2">
              <p>Qty</p>
              <input
                type="number"
                className="mt-1 block w-full border rounded py-1 px-2"
                value={buyDetails.qty}
                id="qty"
                onChange={(e) =>
                  setBuyDetails({
                    ...buyDetails,
                    qty: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <p>Price</p>
              <input
                type="number"
                className="mt-1 block w-full border rounded py-1 px-2"
                value={buyDetails.price}
                id="price"
                onChange={(e) =>
                  setBuyDetails({
                    ...buyDetails,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <button
              type="button"
              className="w-full bg-logo-s text-white text-lg px-4 py-2 rounded cursor-pointer"
              onClick={handleBuy}
            >
              Buy
            </button>
            <ClearIcon
              className="cursor-pointer absolute top-4 right-4 w-4"
              onClick={() => setShowPopup(false)}
            />
          </div>
        </div>
      )}
      {"SELL"}
      {showSellPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center
            bg-gray-800/40"
        >
          <div className="bg-white text-logo-l p-4 rounded relative w-full max-w-80">
            <h1 className="text-xl font-semibold mb-4">{uid}</h1>
            <div className="mb-2">
              <p>Qty</p>
              <input
                type="number"
                className="mt-1 block w-full border rounded py-1 px-2"
                value={sellDetails.qty}
                id="qty"
                onChange={(e) =>
                  setSellDetails({
                    ...sellDetails,
                    qty: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-2">
              <p>Price</p>
              <input
                type="number"
                className="mt-1 block w-full border rounded py-1 px-2"
                value={sellDetails.price}
                id="price"
                onChange={(e) =>
                  setSellDetails({
                    ...sellDetails,
                    price: e.target.value,
                  })
                }
              />
            </div>
            <button
              type="button"
              className="w-full bg-logo-s text-white text-lg px-4 py-2 rounded cursor-pointer"
              onClick={handleSell}
            >
              Sell
            </button>
            <ClearIcon
              className="cursor-pointer absolute top-4 right-4 w-4"
              onClick={() => setShowSellPopup(false)}
            />
          </div>
        </div>
      )}
    </>
  );
};
