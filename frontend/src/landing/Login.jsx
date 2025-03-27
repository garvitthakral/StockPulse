import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) => {
    toast.error(err, {
      position: "bottom-left",
    });
  };

  const handleSuccess = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://stockpulse-backend-079r.onrender.com/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        const verification = await axios.get(
          "https://stockpulse-backend-079r.onrender.com/userVerification",
          { withCredentials: true }
        );

        if (verification.data.status) {
          navigate("/");
          handleSuccess(message);
        }
      }
    } catch (error) {
      handleError(error);
      console.log("Login failed:", error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };
  return (
    <div className="px-50 py-20">
      <div className="px-10 py-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold py-6 text-logo-p">
          Login to a free demat and trading account online
        </h1>
        <h3 className="text-lg font-extralight text-gray-500">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </h3>
      </div>
      <div className="flex ">
        <img src="\public\data\account_open.svg" alt="" className="w-8/12 p-6" />
        <div className="w-4/12 p-4 shadow-lg rounded-4xl">
          <form onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold text-logo-s pt-6 pb-2">
              Login now
            </h1>
            <h4 className="text-lg font-extralight text-gray-500">
              Or track your existing application
            </h4>
            <div className="flex flex-col items-start justify-center py-6 gap-6 text-lg">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleOnChange}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo-p focus:border-logo-p text-gray-700"
              />
              <label htmlFor="password">Password</label>
              <input
                onChange={handleOnChange}
                type="password"
                name="password"
                placeholder="Enter your password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo-p focus:border-logo-p text-gray-700"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-logo-p text-white text-lg hover:shadow-lg rounded-lg cursor-pointer mr-2"
            >
              Login
            </button>
            <NavLink
              to={"/signup"}
              className={
                "px-5 py-3 bg-white text-logo-p text-xl rounded-lg hover:shadow-lg"
              }
            >
              Signup
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
