const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users.routes");
const messagesRouter = require("./routes/messages.routes");

const app = express();
const publicPath = path.join(__dirname, "public");

app.use(express.json());
app.use((req, res, next) => {
  console.log(__dirname);
  next();
});
app.use("/site", express.static(publicPath));
// expres.static() takes in a relative path string of public folder. Relative to the folder from where we lauch are nodejs server

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});

app.use("/users", usersRouter);
app.use("/messages", messagesRouter);

app.listen(3000);
