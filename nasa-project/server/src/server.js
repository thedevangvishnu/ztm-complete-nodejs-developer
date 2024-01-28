const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const { loadPlanetsData } = require("./models/planets/planets.model");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("Mongoose connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(
    "mongodb+srv://dv080499:hesPL31sebkUXATp@cluster0.vjkszou.mongodb.net/nasa-project"
  );

  // load the planett data and then start the server
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
  });
}

startServer();
