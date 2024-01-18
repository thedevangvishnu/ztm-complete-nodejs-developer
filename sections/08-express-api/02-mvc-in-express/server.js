// Convert the server written in 01-first-express-server.js according to mvc

const express = require("express");
const app = express();

const { getUsers, getUser, addUser } = require("./controller/users.controller");
const { getMessages } = require("./controller/messages.controller");

app.use(express.json());
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;

  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/users", getUsers);

app.get("/users/:id", getUser);

app.post("/newuser", addUser);

app.get("/messages", getMessages);

app.listen(3000);
