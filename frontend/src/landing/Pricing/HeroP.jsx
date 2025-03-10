import React from "react";

const HeroP = () => {
  return (
    <div className="px-50">
      <div className="flex flex-col items-center justify-center py-24">
        <h1 className="text-6xl font-semibold text-gray-700">Charges</h1>
        <p className="text-2xl font-light py-6 text-gray-400">
          List of all charges and taxes
        </p>
      </div>
      <div className="flex">
        <div className="w-4/12 mx-14 flex flex-col items-center justify-center">
          <img src="assets\svgs\pricing0.svg" alt="" />
          <h2 className="text-2xl font-semibold">Free equity delivery</h2>
          <p className="text-lg font-light mt-6">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage
          </p>
        </div>
        <div className="w-4/12 mx-14 flex flex-col items-center justify-center">
          <img src="assets\svgs\pricing20.svg" alt="" />
          <h2 className="text-2xl font-semibold">Intraday and F&O trades</h2>
          <p className="text-lg font-light mt-6">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades
          </p>
        </div>
        <div className="w-4/12 mx-14 flex flex-col items-center justify-center">
          <img src="assets\svgs\pricing0.svg" alt="" />
          <h2 className="text-2xl font-semibold">Free direct MF</h2>
          <p className="text-lg font-light mt-6">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroP;
