import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return allOrders ? (
    <div className="py-10 px-6">
      <table className="w-full border-collapse">
        <thead className="border-y border-gray-600">
          <tr className="text-gray-700">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Qty</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">total</th>
            <th className="px-4 py-2 text-left">Mode</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((stock, idx) => {
            const total = stock.price * stock.qty;
            const checkMode = (mode) => {
              if (mode == "BUY") {
                return true;
              } else {
                return false;
              }
            };
            return (
              <tr
                className={`border-b border-gray-600 ${
                  checkMode(stock.mode) ? "text-green-500" : "text-red-500"
                }`}
                key={idx}
              >
                <td className="px-4 py-2">{stock.name}</td>
                <td className="px-4 py-2">{stock.qty}</td>
                <td className="px-4 py-2">{stock.price}</td>
                <td className="px-4 py-2">{total}</td>
                <td className="px-4 py-2">{stock.mode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="p-24">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-gray-600 pb-8">
          You haven't placed any orders today
        </p>
        <button className="py-3 px-4 bg-logo-p text-white rounded-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Orders;
