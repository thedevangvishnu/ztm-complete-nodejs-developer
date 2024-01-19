const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users.routes");
const messagesRouter = require("./routes/messages.routes");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

app.use("/files", express.static(publicPath));
// expres.static() takes in a relative path string of public folder. Relative to the folder from where we lauch are nodejs server

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Express Site Using Template Engines",
    caption: "Home Page",
  });
});

app.use("/users", usersRouter);
app.use("/messages", messagesRouter);

app.listen(3000);
