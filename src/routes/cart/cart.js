const express=require("express")
const controllerCart = require("../../controllers/controllerCart")
const routes = express.Router()
routes.post("/Cart",controllerCart.create)
routes.get("/Cart",controllerCart.index)
routes.put("/Cart",controllerCart.update)
routes.delete("/Cart",controllerCart.delete)
module.exports = routes