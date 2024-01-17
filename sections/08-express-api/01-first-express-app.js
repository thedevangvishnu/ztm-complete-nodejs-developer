// Create a simple express server.

const express = require("express");
const app = express();

const friends = [
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

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/friends", (req, res) => {
  res.status(200).json(friends);
});

app.get("/friends/:id", (req, res) => {
  const requestId = Number(req.params.id);

  const friendProfile = friends[requestId - 1];
  console.log(friendProfile);

  if (friendProfile) {
    res.status(200).json(friendProfile);
  } else {
    res.status(404).json("Not found");
  }
});

app.get("/user", (req, res) => {
  res.json({
    id: 1,
    name: "Devang Vishnu",
    numberOfPosts: 25,
  });
});

app.listen(3000);
