const mongoose = require("mongoose");
const { userSchema } = require("../schema/UserSchema");

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };