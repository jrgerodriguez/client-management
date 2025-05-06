const { client } = require("../db/connection");
const collection = client.db().collection("clients");
const { ObjectId } = require('mongodb');

//Esta funcion obtiene todos los clientes
async function getAllClients(req, res) {
  try {
    const clients = await collection.find().toArray();
    res.status(200).json(clients);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

//Esta funcion obtiene todos los detalles de un client por su Id
async function getClientById(req, res) {

  const clientId = req.params.clientId

  try {
    const client = await collection.findOne({ _id: new ObjectId(clientId)})
    if(!client) {
      return res.status(404).json({error: "Client not found"})
    }
    res.status(200).json(client);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

//Esta funcion cambia el estado del cliente segun su Id
async function changeStatus(req, res) {
    const clientId = req.params.clientId
     
    try {
      const client = await collection.findOne({ _id: new ObjectId(clientId)})

      if(!client) {
        return res.status(404).json({error:"Client not found" })
      }
  
      const newStatus = client.client_status === "Active" ? "Inactive" : "Active"

      await collection.updateOne (
        {_id: new ObjectId(clientId)},
        {$set: {client_status: newStatus}}
      )

      res.status(200).json({message: "Status updated", newStatus})

    } catch (error) {
      console.error("Error:", error)
      res.status(500).json({error: "Error updating status."})
    }
}

//This function registers a new client
async function createClient (req, res) {
  const {name, address, city, state, zip_code, phone, email} = req.body

  const newUser = {
    name,
    address,
    city,
    state,
    zip_code,
    phone,
    email,
    client_status: "Active"
  }
  
  try {
    
    await collection.insertOne(newUser)
    res.status(200).json({message: "New Client Created Successfully"})

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
}

//This function eliminates a new client
async function deleteClient (req, res) {
  const clientId = req.params.clientId

  try {
    const client = await collection.findOne({ _id: new ObjectId(clientId)})
    if(!client) {
      return res.status(404).json({error:"Client not found" })
    }
    await collection.deleteOne({_id: new ObjectId(clientId)})
    res.status(200).json({message: "Client successfully deleted"})
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
} 

module.exports = { getAllClients , getClientById, changeStatus, createClient, deleteClient};
