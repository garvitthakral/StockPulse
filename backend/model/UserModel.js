const { model } = require("mongoose");
const { userSchema } = require("../schema/UserSchema");

const UserModel = new model("user", userSchema);

module.exports = { UserModel };