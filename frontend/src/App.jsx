import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import Home from "./landing/Home/Home";
import PageNotFound from "./landing/PageNotFound";
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";
import About from "./landing/About/About";
import Pricing from "./landing/Pricing/Pricing";
import Support from "./landing/Support/Support";
import Signup from "./landing/Signup";
import Login from "./landing/Login";
import { CookiesProvider } from "react-cookie";

export const AuthContext = React.createContext();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://stockpulse-backend-079r.onrender.com/userVerification", { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setUser(res.data.user);
          if (
            location.pathname === "/login" ||
            location.pathname === "/signup"
          ) {
            navigate("/");
          }
        } else {
          setUser(null);
        }
      })
      .catch(() => {
        console.error("Error verifying user:", error);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [navigate, location.pathname]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <CookiesProvider>
          <Navbar />
        </CookiesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
