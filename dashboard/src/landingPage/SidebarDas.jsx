import React from "react";

const SidebarDas = () => {
  return (
    <div className="border-r border-gray-500 h-dvh">
      <div className="shadow-xl flex justify-between p-4">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty, ful, weekly, gold, mcx"
          className="border-none outline-none"
        />
        <p className="text-sm text-gray-600">9/50</p>
      </div>
    </div>
  );
};

export default SidebarDas;
