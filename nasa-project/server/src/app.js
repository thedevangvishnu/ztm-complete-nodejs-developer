const path = require("path");
const express = require("express");
const planetsRouter = require("./routes/planets/planets.routes");
const cors = require("cors");

const app = express();
const publicPath = path.join(__dirname, "..", "public");
const indexFilePath = path.join(__dirname, "..", "public", "index.html");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(planetsRouter);
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(indexFilePath);
});

module.exports = app;
