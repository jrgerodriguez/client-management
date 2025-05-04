const { client } = require("../db/connection");
const collection = client.db().collection("clients");
const { ObjectId } = require('mongodb');

async function getAllClients(req, res) {
  try {
    const clients = await collection.find().toArray();
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getClientById(req, res) {

  const clientId = req.params.clientId

  try {
    const client = await collection.findOne({ _id: new ObjectId(clientId)})
    if(!client) {
      res.status(404).json({error: "Client not found"})
    }
    res.status(200).json(client);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { getAllClients , getClientById};
