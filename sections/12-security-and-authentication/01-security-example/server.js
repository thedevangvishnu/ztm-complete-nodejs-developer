const https = require("https");
const path = require("path");
const fs = require("fs");
const express = require("express");
const helmet = require("helmet");
const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const cookieSession = require("cookie-session");

require("dotenv").config();

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
};

const AUTH_OPTIONS = {
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
};

const verifyCallback = (accessToken, refreshToken, profile, done) => {
  console.log(profile);
  done(null, profile);
};

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback));

const app = express();
const server = https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
);
const PORT = 3000;
const indexPath = path.join(__dirname, "public", "index.html");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const checkLoggedIn = (req, res, next) => {
  let isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({ error: "You must login" });
  }

  next();
};

app.use(helmet());

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY_1, config.COOKIE_KEY_2],
  })
);

app.use((req, res, next) => {
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = (cb) => {
      cb();
    };
  }

  if (req.session && !req.session.save) {
    req.session.save = (cb) => {
      cb();
    };
  }

  next();
});

app.use(passport.initialize()); // initializes passport and sets up sessions
app.use(passport.session());

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/",
  }),
  (req, res) => {
    console.log("Google called us back");
  }
);

app.get("/auth/logout", (req, res, next) => {
  // removes req.user and clears any logged in session
  req.logout((error) => {
    if (error) {
      return next(error);
    }
    return res.redirect("/");
  });
});

app.get("/secret", checkLoggedIn, (req, res) => {
  res.json({ message: "You security key is 32" });
});

app.get("/failure", (req, res) => {
  res.json({ error: "Failed to login" });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
