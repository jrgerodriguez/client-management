const express = require("express")
const router = express.Router()
const controller = require("../controllers")

router.get("/clients", controller.getAllClients)

router.get("/get-client/:clientId", controller.getClientById)

router.put("/change-status/:clientId", controller.changeStatus)

router.post("/create-client", controller.createClient)

router.delete("/delete-client/:clientId", controller.deleteClient)

router.put("/edit-client/:clientId", controller.editClient)

module.exports = router
