const express = require("express");
const passport = require("passport");

const router = express.Router();

// auth login
router.get("/login", (req, res) => {
  res.render("login");
});

// auth logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/home");
  });
});

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.send("Hello logged in user from redirect URI");
});

// callback route for google to redirect

module.exports = router;
