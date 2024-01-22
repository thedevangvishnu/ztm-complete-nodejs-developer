const path = require("path");
const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.routes");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();
const publicPath = path.join(__dirname, "..", "public");
const indexFilePath = path.join(__dirname, "..", "public", "index.html");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.static(publicPath));

app.use(planetsRouter);
app.use(launchesRouter);

app.get("/", (req, res) => {
  res.sendFile(indexFilePath);
});

module.exports = app;
