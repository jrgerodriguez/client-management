const express = require("express")
const router = express.Router() 
const controller = require("../controllers")

router.get("/clients", controller.getAllClients)

module.exports = router