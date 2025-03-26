const { UserModel } = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No token provided" });
    }
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.json({ status: false, message: "Invalid token" });
      }
      const User = await UserModel.findById(data.id);
      if (User) return res.json({ status: true, user: User.username });
      else return res.json({ status: false, message: "User not found" });
    });
  } catch (error) {
    console.error("Error in user verification:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};
