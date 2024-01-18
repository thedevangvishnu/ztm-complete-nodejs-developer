const model = require("../model/users.model");

function getUsers(req, res) {
  res.status(200).json(model);
}

function getUser(req, res) {
  const requestId = Number(req.params.id);

  const userProfile = model[requestId - 1];
  console.log(userProfile);

  if (userProfile) {
    res.status(200).json(userProfile);
  } else {
    res.status(404).json("Not found");
  }
}

function postUsers(req, res) {
  if (!req.body.name) {
    return res.status(403).json({ error: "name is missing" });
  }

  const user = {
    id: model.length + 1,
    name: req.body.name,
  };

  model.push(user);
  res.status(200).json({ msg: "New user added successfully", newuser: user });
}

module.exports = {
  getUsers,
  getUser,
  postUsers,
};
