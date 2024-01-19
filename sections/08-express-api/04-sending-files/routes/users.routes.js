const express = require("express");
const users = require("../model/users.model");

const {
  getUsers,
  getUser,
  postUsers,
} = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.get("/:id", getUser);
usersRouter.post("/", postUsers);

module.exports = usersRouter;
