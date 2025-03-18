import React from "react";
import NavbarDas from "./landingPage/NavbarDas";
import SidebarDas from "./landingPage/SidebarDas";
import { Route, Routes } from "react-router-dom";
import HomeDas from "./landingPage/home/HomeDas";

function App() {
  return (
    <>
      <NavbarDas />
      <div className="flex">
        <div className="w-4/12">
          <SidebarDas />
        </div>
        <div className="w-8/12">
          <Routes>
            <Route path="/" element={<HomeDas />} />
            <Route path="/orders" element={<HomeDas />} />
            <Route path="/holdings" element={<HomeDas />} />
            <Route path="/positions" element={<HomeDas />} />
            <Route path="/funds" element={<HomeDas />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
