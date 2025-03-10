import React from "react";
import Home from "./landing/Home/Home";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./landing/PageNotFound";
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";
import About from "./landing/About/About";
import Pricing from "./landing/Pricing/Pricing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Home />} />
        <Route path="/signin" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
