const express = require("express");
const planetsRouter = require("./routes/planets/planets.routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(planetsRouter);

module.exports = app;
