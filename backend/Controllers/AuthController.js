const { UserModel } = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.SignUp = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await UserModel.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,   
      secure: true,      
      sameSite: "None",  
      domain: ".onrender.com",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
      path: "/",
    });
    res
      .status(201)
      .json({ message: "User Signed in Successfully", success: true, user, redirect: "/" });
    next();
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try{
    const { email, password } = req.body;
    if(!email || !password ) {
      return res.json({ message: "All feilds are required" })
    }
    const user = await UserModel.findOne({ email });
    if(!user) {
      return res.json({ message: "Incorrect Username or Password" })
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true, sameSite: "None", secure: true , domain: ".onrender.com",
      maxAge: 7 * 24 * 60 * 60 * 1000, 
      path: "/",
    });
    res.status(201).json({ message: "User Logged in Successfully", success: true, redirect: "/" })
    next()
  } catch (error) {
    console.error(error);
  }
}