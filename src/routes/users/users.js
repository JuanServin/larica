const express=require("express")
const controllerUsers = require("../../controllers/controllerUsers")
const controllerAdress= require("../../controllers/controllerAddress")
const routes = express.Router()
routes.post("/users",controllerAdress.create,controllerUsers.create)
routes.get("/users",controllerUsers.index)
routes.put("/users/:id",controllerUsers.update)
routes.delete("/users=:id",controllerUsers.delete)
module.exports = routes
