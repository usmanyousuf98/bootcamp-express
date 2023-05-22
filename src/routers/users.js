const express = require("express");
const { handleSignup, handleLogin } = require("../controllers/users");
const router = express.Router();

router.post("/signup", handleSignup);
router.post("/login", handleSignup);

module.exports = router;
