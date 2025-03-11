import React from "react";

const NavbarDas = () => {
  return (
    <div className="flex shadow-2xl">
      <div className="w-4/12 pl-13 pr-4 py-4 flex text-sm border-r border-gray-400">
        <p className="w-6/12">
          <span className="font-semibold">NIFTY 50</span>
          <span className="text-red-600"> 18181.75</span>
          <span className="pr-1 text-gray-500"> -104.75 (-0.5%)</span>
        </p>
        <p className="w-6/12">
          <span className="font-semibold">SENSEX</span>
          <span className="text-red-600"> 61560.64</span>
          <span className="text-gray-500"> -371.83 (-0.60%)</span>
        </p>
      </div>
      <div className="8/12">
        <div></div>
      </div>
    </div>
  );
};

export default NavbarDas;
