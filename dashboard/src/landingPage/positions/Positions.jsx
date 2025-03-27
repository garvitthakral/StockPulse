import React, { useState, useEffect} from "react";
// import { positions } from "../../data/data";
import axios from "axios";

const Positions = () => {

  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    axios.get("https://stockpulse-backend-079r.onrender.com/allPosition").then((res) => {
      setAllPosition(res.data);
    })
  }, []);

  return (
    <div className="p-4">
      <h1 className="py-18 text-2xl text-gray-500">
        Positions ({allPosition.length})
      </h1>
      <div>
        <table className="w-full border-collapse">
          <thead className="border-y border-gray-600">
            <tr className="text-gray-500">
              <th className="px-4 py-2 text-left">Product</th>
              <th className="px-4 py-2 text-left">Instrument</th>
              <th className="px-4 py-2 text-right">Qty.</th>
              <th className="px-4 py-2 text-right">Avg</th>
              <th className="px-4 py-2 text-right">LTP</th>
              <th className="px-4 py-2 text-right">P&L</th>
              <th className="px-4 py-2 text-right">Chg</th>
            </tr>
          </thead>
          <tbody>
            {allPosition.map((stock, idx) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-500" : "text-red-500";
              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr className="border-b border-gray-600" key={idx}>
                  <td className="px-4 py-2">{stock.product}</td>
                  <td className="px-4 py-2">{stock.name}</td>
                  <td className="px-4 py-2 text-right">{stock.qty}</td>
                  <td className="px-4 py-2 text-right">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className={`px-4 py-2 text-right ${profClass}`}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-4 py-2 text-right ${dayClass}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
