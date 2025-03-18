import React from "react";

const Positions = () => {
  return (
    <div className="p-4">
      <h1 className="py-18 text-2xl text-gray-500">Positions (2)</h1>
      <div>
        <table className="w-[1080px]">
          <thead className="border-y border-gray-600">
            <tr className="flex justify-between py-2 text-gray-500">
              <th className="w-4/12">Product</th>
              <th className="w-2/12">Instrument</th>
              <th className="w-1/12">Qty.</th>
              <th className="w-1/12">Avg</th>
              <th className="w-1/12">LTP</th>
              <th className="w-1/12">P&L</th>
              <th className="w-2/12">Chg</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Positions;
