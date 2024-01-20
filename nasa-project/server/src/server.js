const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets/planets.model");

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);

async function startServer() {
  // load the planett data and then start the server
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
  });
}

startServer();
