const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("Mongoose connection ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function connectToMongo() {
  await mongoose.connect(
    "mongodb+srv://dv080499:hesPL31sebkUXATp@cluster0.vjkszou.mongodb.net/nasa-project"
  );
}

async function disconnectToMongo() {
  await mongoose.disconnect();
}

module.exports = { connectToMongo, disconnectToMongo };
