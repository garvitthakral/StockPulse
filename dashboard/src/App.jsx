import React, { useEffect, useState } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  Navigate,
} from "react-router-dom";
import axios from "axios";

import NavbarDas from "./landingPage/NavbarDas";
import SidebarDas from "./landingPage/SidebarDas";
import HomeDas from "./landingPage/home/HomeDas";
import Orders from "./landingPage/order/Orders";
import Holdings from "./landingPage/holdings/Holdings";
import Positions from "./landingPage/positions/Positions";
import { Login, Signup } from "./landingPage/loginPage";
import { Outlet } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

export const AuthContext = React.createContext();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/userVerification", { withCredentials: true })
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
        <Routes>
          {/* Authentication Routes */}
          <Route
            path="/signup"
            element={user ? <Navigate to="/" replace /> : <Signup />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace /> : <Login />}
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              user ? <ProtectedLayout /> : <Navigate to="/signup" replace />
            }
          >
            <Route index element={<HomeDas />} />
            <Route path="orders" element={<Orders />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="positions" element={<Positions />} />
            <Route path="funds" element={<HomeDas />} />
          </Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

const ProtectedLayout = () => {
  return (
    <>
      <CookiesProvider>
        <NavbarDas />
      </CookiesProvider>
      <div className="flex">
        <div className="w-4/12">
          <SidebarDas />
        </div>
        <div className="w-8/12">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
