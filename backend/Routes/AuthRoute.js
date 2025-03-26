const { SignUp, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.get("/userVerification", userVerification);

module.exports = router;
