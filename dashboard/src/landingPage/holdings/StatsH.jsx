import React from "react";

const StatsH = () => {
  return (
    <div className="p-4">
      <div className="flex">
        <div className="w-4/12">
          <h1 className="text-2xl text-gray-600 pb-10">29,875.55</h1>
          <p className="text-sm text-gray-400">Total investment</p>
        </div>
        <div className="w-4/12">
          <h1 className="text-2xl text-gray-600 pb-10">31,428.95</h1>
          <p className="text-sm text-gray-400">Current value</p>
        </div>
        <div className="w-4/12">
          <h1 className="text-2xl text-green-500 pb-10">1,553.40 (+5.20%)</h1>
          <p className="text-sm text-gray-400">P&L</p>
        </div>
      </div>
    </div>
  );
};

export default StatsH;
