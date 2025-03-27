import React, { useEffect, useState } from "react";
import chargesData from "../../../public/assets/chargesData";

const Table = () => {
  const [charges, setCharges] = useState([]);

  useEffect(() => {
    setCharges(chargesData);
  }, []);

  return (
    <div className="px-50 mt-26">
      <h1 className="flex items-center justify-center text-4xl font-semibold pb-14">Equity</h1>
      <div className="px-10">
        <table className="shadow-2xl rounded-2xl">
          <thead className="border-b border-gray-400">
            <tr className="text-xl">
              <th className="px-4 py-4">#</th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            {charges.map((item, idx) => (
              <tr key={idx} className="text-lg font-light">
                <td className="p-6 font-semibold">{item.category}</td>
                <td className="p-6">{item.equityDelivery}</td>
                <td className="p-6">{item.equityIntraday}</td>
                <td className="p-6">{item.foFutures}</td>
                <td className="p-6">
                  {typeof item.foOptions === "object"
                    ? Object.entries(item.foOptions).map(([key, value]) => (
                        <div key={key}>
                          {key}: {value}
                        </div>
                      ))
                    : item.foOptions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
