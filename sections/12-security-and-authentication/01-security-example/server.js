const https = require("https");
const path = require("path");
const fs = require("fs");
const express = require("express");
const helmet = require("helmet");

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

app.use(helmet());

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.get("/security", (req, res) => {
  res.json({ message: "You security key is 32" });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
