import React from "react";
import NavbarDas from "./landingPage/NavbarDas";
import SidebarDas from "./landingPage/SidebarDas";
import { Route, Routes } from "react-router-dom";
import HomeDas from "./landingPage/home/HomeDas";

function App() {
  return (
  <>
    <NavbarDas />
    <SidebarDas />
    <Routes>
      <Route path="/" element={<HomeDas />}/>
      <Route path="/orders" element={<HomeDas />}/>
      <Route path="/holdings" element={<HomeDas />}/>
      <Route path="/positions" element={<HomeDas />}/>
      <Route path="/funds" element={<HomeDas />}/>
    </Routes>
  </>
  );
}

export default App;
