import React from "react";

const ChargesOpt = () => {
  return (
    <div className="px-50 pt-30">
      <h1 className="flex items-center justify-center text-4xl font-semibold">
        Charges for optional value added services
      </h1>
      <div className="py-10">
        <table className="w-full rounded-2xl shadow-2xl ">
          <thead className="">
            <tr className="flex items-center p-4 border-b border-gray-400">
              <th className="w-4/12 flex items-center justify-between">
                Service
              </th>
              <th className="w-4/12 flex items-center justify-between">
                Billing Frquency
              </th>
              <th className="w-4/12 flex items-center justify-between">
                {" "}
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex items-center px-8 pb-2 pt-2">
              <td className="w-4/12 flex items-center justify-between">
                Tickertape
              </td>
              <td className="w-4/12 flex items-center justify-between">
                Monthly / Annual
              </td>
              <td className="w-4/12 flex items-center justify-between">
                Free: 0 | Pro: 249/2399
              </td>
            </tr>
            <tr className="flex items-center px-8 pb-2">
              <td className="w-4/12 flex items-center justify-between">
                Smallcase
              </td>
              <td className="w-4/12 flex items-center justify-between">
                Per transaction
              </td>
              <td className="w-4/12 flex items-center justify-between">
                Buy & Invest More: 100 | SIP: 10
              </td>
            </tr>
            <tr className="flex items-center px-8 pb-4">
              <td className="w-4/12 flex items-center justify-between">
                Kite Connect
              </td>
              <td className="w-4/12 flex items-center justify-between">
                Monthly
              </td>
              <td className="w-4/12 flex items-center justify-between">
                Connect: 2000 | Historical: 2000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargesOpt;
