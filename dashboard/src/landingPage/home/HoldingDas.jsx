import React from "react";

const HoldingDas = () => {
  return (
    <div className="p-6">
      <h1 className="py-11 text-xl font-semibold">Holdings (13)</h1>
      <div className="flex">
        <div className="w-6/12">
          <h1 className="text-4xl text-green-500">
            1.55k<span className="text-sm">+5.20%</span>
          </h1>
        </div>
        <div className="w-6/12 text-sm text-gray-600">
          Current Value: 31.43k <br />Investment: 29.88 k
        </div>
      </div>
    </div>
  );
};

export default HoldingDas;