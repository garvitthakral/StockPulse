import React from "react";

const Orders = () => {
  return (
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
