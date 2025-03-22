import React from "react";
import NavbarDas from "./landingPage/NavbarDas";
import SidebarDas from "./landingPage/SidebarDas";
import { Route, Routes } from "react-router-dom";
import HomeDas from "./landingPage/home/HomeDas";
import Orders from "./landingPage/order/Orders";
import Holdings from "./landingPage/holdings/Holdings";
import Positions from "./landingPage/positions/Positions";
import { GeneralContextProvider } from "./landingPage/GeneralContext";

function App() {
  return (
    <>
      <NavbarDas />
      <div className="flex">
        <div className="w-4/12">
          <SidebarDas />
        </div>
        <GeneralContextProvider>
          
        </GeneralContextProvider>
        <div className="w-8/12">
          <Routes>
            <Route path="/" element={<HomeDas />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<HomeDas />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
