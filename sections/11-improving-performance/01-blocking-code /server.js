const express = require("express");
const app = express();

function delay(duration) {
  const startTime = Date.now();

  while (Date.now() - startTime < duration) {
    // do someting ----> this is going to block the event loop
  }
}

app.get("/", (req, res) => {
  res.send("Performace Testing");
});

app.get("/timer", (req, res) => {
  delay(9000);
  res.send("Timer page");
});

app.listen(3000);
