const express = require("express");
const authRouter = require("./routes/auth-routes");
const passportSetup = require("./config/passport-setup");
const { connectToMongoDB } = require("./config/mongodb");

const app = express();

app.set("view engine", "ejs");

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
