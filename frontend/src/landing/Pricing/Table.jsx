import React, { useEffect, useState } from "react";
import chargesData from "../../../assets/chargesData";

const Table = () => {
  const [charges, setCharges] = useState([]);

  useEffect(() => {
    setCharges(chargesData);
  }, []);

  return (
    <div>
      <h1>Equity</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            {charges.map((item, idx) => (
              <tr key={idx}>
                <td>{item.category}</td>
                <td>{item.equityDelivery}</td>
                <td>{item.equityIntraday}</td>
                <td>{item.foFutures}</td>
                <td>
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
