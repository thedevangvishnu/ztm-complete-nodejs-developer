const express = require("express");
const passport = require("passport");

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
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.send("Hello logged in user from redirect URI");
});

// callback route for google to redirect

module.exports = router;
