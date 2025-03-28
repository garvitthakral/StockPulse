import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, password, username } = inputValue;
  const handleOnchange = (e) => {
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
        "https://stockpulse-tewo.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );

      const { success, message } = data;
      if (success) {
        const verification = await axios.get(
          "https://stockpulse-tewo.onrender.com/userVerification",
          { withCredentials: true }
        );

        if (verification.data.status) {
          navigate(response.data.redirect || "/");
          handleSuccess(message);
        }
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="px-50 py-20">
      <div className="px-10 py-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold py-6 text-logo-p">
          Open a free demat and trading account online
        </h1>
        <h3 className="text-lg font-extralight text-gray-500">
          Start investing brokerage free and join a community of 1.5+ crore
          investors and traders
        </h3>
      </div>
      <div className="flex ">
        <img
          src="https://res.cloudinary.com/dtntjxdio/image/upload/v1743102536/account_open_pq9wrs.svg"
          alt=""
          className="w-8/12 p-6"
        />
        <div className="w-4/12 p-4 shadow-lg rounded-4xl">
          <form onSubmit={handleSubmit}>
            <h1 className="text-4xl font-semibold text-logo-s pt-6 pb-2">
              Signup now
            </h1>
            <h4 className="text-lg font-extralight text-gray-500">
              Or track your existing application
            </h4>
            <div className="flex flex-col items-start justify-center py-6 gap-6 text-lg">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleOnchange}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo-p focus:border-logo-p text-gray-700"
              />
              <label htmlFor="username">Username</label>
              <input
                onChange={handleOnchange}
                type="text"
                name="username"
                placeholder="Enter your username"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-logo-p focus:border-logo-p text-gray-700"
              />
              <label htmlFor="password">Password</label>
              <input
                onChange={handleOnchange}
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
              Signup
            </button>
            <NavLink
              to={"/login"}
              className={
                "px-5 py-3 bg-white text-logo-p text-xl rounded-lg hover:shadow-lg"
              }
            >
              Login
            </NavLink>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
