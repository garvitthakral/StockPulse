import React from "react";
import { Link, NavLink } from "react-router-dom";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const handleCancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div>
      <div>
        <div>
            <fieldset>
                <legend>Qty.</legend>
                <input type="number" name="qty" id="qty"/>
            </fieldset>
            <fieldset>
                <legend>Price</legend>
                <input type="number" name="price" id="price"/>
            </fieldset>
        </div>
      </div>
      <div>
        <span>Margin required $140.60</span>
        <div>
            <Link>Buy</Link>
            <Link onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
