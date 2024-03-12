const express = require("express");

const router = express.Router();

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth logout
router.get("/logout", (req, res) => {
  res.send("Logging out");
});

// auth with google
router.get("/google", (req, res) => {
  // handle with passport js
  res.send("Logging in with Google using passport");
});

module.exports = router;
