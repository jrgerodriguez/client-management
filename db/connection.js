require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI);
let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await client.connect();
    isConnected = true;
    console.log("Database Connected");
  } catch (error) {
    console.error("Connection to database failed:", error);
  }
}

module.exports = { connectDB, client };
