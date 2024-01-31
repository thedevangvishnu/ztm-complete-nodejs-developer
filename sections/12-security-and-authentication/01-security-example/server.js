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

const checkLoggedIn = (req, res, next) => {
  let isLoggedIn = true;
  if (!isLoggedIn) {
    return res.status(401).json({ error: "You must login" });
  }

  next();
};

app.use(helmet());

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.get("/auth/google", (req, res) => {});
app.get("/auth/google/callback", (req, res) => {});
app.get("/auth/logout", (req, res) => {});

app.get("/secret", checkLoggedIn, (req, res) => {
  res.json({ message: "You security key is 32" });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
