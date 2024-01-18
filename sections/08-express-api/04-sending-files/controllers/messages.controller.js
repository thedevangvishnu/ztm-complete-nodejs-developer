const path = require("path");
const imagePath = path.join(__dirname, "..", "public", "images", "image.jpg");

function getMessages(req, res) {
  res.sendFile(imagePath); // sendFile() needs absolute path
}

function postMessages(req, res) {
  if (!req.body.message) {
    return res.status(403).json({ error: "message is invalid" });
  }

  const message = req.body.message;

  res.status(200).json({ newMessage: message });
}

module.exports = { getMessages, postMessages };
