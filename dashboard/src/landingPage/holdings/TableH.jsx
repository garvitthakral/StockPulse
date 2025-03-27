import React, { useState, useEffect} from "react";
// import { holdings } from "../../data/data";
import axios, { all } from "axios";
import { VerticalGraph } from "../VerticalGraph";

const TableH = () => {

  const [allHolding, setAllHolding] = useState([]);

  useEffect(() => {
    axios.get("https://stockpulse-backend-079r.onrender.com/allHoldings").then((res) => {
      setAllHolding(res.data);
    })
  }, []);

  const labels = allHolding.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHolding.map((stock) => stock.price),
        backgroundColor: "rgba(44,110,121,255)",
      },
    ],
  };

  return (

    <>
    <div className="py-10">
      <h1 className="py-6 text-xl font-semibold text-gray-700">
        Holdings ({allHolding.length})
      </h1>
      <div>
        <table className="w-full border-collapse">
          <thead className="border-y border-gray-600">
            <tr className="text-gray-700">
              <th className="px-4 py-2 text-left">Instrument</th>
              <th className="px-4 py-2 text-right">Qty.</th>
              <th className="px-4 py-2 text-right">Avg. Cost</th>
              <th className="px-4 py-2 text-right">LTP</th>
              <th className="px-4 py-2 text-right">Cur. Val</th>
              <th className="px-4 py-2 text-right">P&L</th>
              <th className="px-4 py-2 text-right">Net Chg.</th>
              <th className="px-4 py-2 text-right">Day Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHolding.map((stock, idx) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "text-green-500" : "text-red-500";
              const dayClass = stock.isLoss ? "text-red-500" : "text-green-500";

              return (
                <tr className="border-b border-gray-600" key={idx}>
                  <td className="px-4 py-2">{stock.name}</td>
                  <td className="px-4 py-2 text-right">{stock.qty}</td>
                  <td className="px-4 py-2 text-right">
                    {stock.avg.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-right">
                    {stock.price.toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-right">{currVal.toFixed(2)}</td>
                  <td className={`px-4 py-2 text-right ${profClass}`}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={`px-4 py-2 text-right ${profClass}`}>
                    {stock.net}
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
    <VerticalGraph data={data}/>
    </>
  );
};

export default TableH;
