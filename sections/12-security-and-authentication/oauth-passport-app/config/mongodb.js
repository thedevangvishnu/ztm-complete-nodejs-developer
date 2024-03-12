const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB...");
});

mongoose.connection.on("error", () => {
  console.log("Error connecting to MongoDB");
});

const connectToMongoDB = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
};

module.exports = {
  connectToMongoDB,
};
