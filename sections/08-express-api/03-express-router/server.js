const express = require("express");
const app = express();

const {
  getUsers,
  getUser,
  postUsers,
} = require("./controllers/users.controller");
const {
  getMessages,
  postMessages,
} = require("./controllers/messages.controller");

const usersRouter = require("./routes/users.routes");
const messagesRouter = require("./routes/messages.routes");

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

app.use("/users", usersRouter);

app.use("/messages", messagesRouter);

app.listen(3000);
