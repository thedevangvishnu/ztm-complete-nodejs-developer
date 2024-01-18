// Create a simple express server.
// In the freinds database,
// create a get route that get all the users
// create a get route that gets the specific user based on the id (passed as request param)
// create a post route to add new user to the database
// create a put route that can update the existing user on their matching id
// create a delete route that can delete user from the database

const express = require("express");
const app = express();

const users = [
  {
    id: 1,
    name: "Shivam",
  },
  {
    id: 2,
    name: "Rohit",
  },
  {
    id: 3,
    name: "Priya",
  },
  {
    id: 4,
    name: "Ankit",
  },
];

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

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const requestId = Number(req.params.id);

  const userProfile = users[requestId - 1];
  console.log(userProfile);

  if (userProfile) {
    res.status(200).json(userProfile);
  } else {
    res.status(404).json("Not found");
  }
});

app.post("/newuser", (req, res) => {
  if (!req.body.name) {
    return res.status(403).json({ error: "name is missing" });
  }

  const user = {
    id: users.length + 1,
    name: req.body.name,
  };

  users.push(user);
  res.status(200).json({ msg: "New user added successfully", newuser: user });
});

app.listen(3000);
