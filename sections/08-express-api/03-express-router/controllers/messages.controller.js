const model = require("../model/messages.model");

function getMessages(req, res) {
  res.send(model);
}

function postMessages(req, res) {
  if (!req.body.message) {
    return res.status(403).json({ error: "message is invalid" });
  }

  const message = {
    id: model.length + 1,
    message: req.body.message,
  };

  model.push(message);
  res.status(200).json({ newMessage: message });
}

module.exports = { getMessages, postMessages };
