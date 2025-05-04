const express = require("express")
const router = express.Router()
const controller = require("../controllers")

router.get("/clients", controller.getAllClients)

router.get("/get-client/:clientId", controller.getClientById)

module.exports = router