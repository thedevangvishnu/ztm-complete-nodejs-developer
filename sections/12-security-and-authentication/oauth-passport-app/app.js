const express = require("express");
const authRouter = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const { connectToMongoDB } = require("./config/mongodb");
const cookieSession = require("cookie-session");
const passport = require("passport");

require("dotenv").config();

const app = express();

app.set("view engine", "ejs");

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
    secure: false,
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

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.render("home");
});

const startServer = async () => {
  await connectToMongoDB();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}...`);
  });
};

startServer();
