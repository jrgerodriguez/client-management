const { client } = require("../db/connection");
const collection = client.db().collection("clients");

async function getAllClients(req, res) {
  try {
    const clients = await collection.find().toArray();
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { getAllClients };
