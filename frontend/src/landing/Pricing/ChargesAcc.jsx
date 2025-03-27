import React from "react";

const ChargesAcc = () => {
  return (
    <div className="px-50">
      <h1 className="flex items-center justify-center text-4xl font-semibold">
        Charges for account opening
      </h1>
      <div className="py-10">
        <table className="w-full rounded-2xl shadow-2xl ">
          <thead className="">
            <tr className="flex items-center justify-between p-8 border-b border-gray-400">
              <th>Type of account</th>
              <th> Charges</th>
            </tr>
          </thead>
          <tbody >
            <tr className="flex items-center justify-between px-8 pb-2 pt-2">
              <td>Online account</td>
              <td>
                <img
                  src="public\assets\svgs\free-bedge.svg"
                  alt="Free"
                  className="h-12"
                />
              </td>
            </tr>
            <tr className="flex items-center justify-between px-8 pb-2">
              <td>Offline account</td>
              <td>
                <img
                  src="public\assets\svgs\free-bedge.svg"
                  alt="Free"
                  className="h-12"
                />
              </td>
            </tr>
            <tr className="flex items-center justify-between px-8 pb-4">
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr className="flex items-center justify-between px-8 pb-8">
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChargesAcc;
