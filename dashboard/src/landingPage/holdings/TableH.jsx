import React from "react";

const TableH = () => {
  return (
    <div className="py-10">
      <h1 className="py-6 text-xl font-semibold text-gray-700">
        Holdings (13)
      </h1>
      <div>
        <table className="w-[1080px]">
          <thead className="border-y border-gray-600">
            <tr className="flex justify-between py-2">
              <th className="w-3/12">Instrument</th>
              <th className="w-1/12">Qty.</th>
              <th className="w-1/12">Avg. cost</th>
              <th className="w-2/12">LTP</th>
              <th className="w-1/12">Cur. val</th>
              <th className="w-2/12">P&L</th>
              <th className="w-1/12">Net chg.</th>
              <th className="w-1/12">Day chg.</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default TableH;
