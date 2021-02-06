const express=require("express")
const controllerCategories = require("../../controllers/controllerCategoria")
const routes = express.Router()
routes.post("/Categoria",controllerCategories.create)
routes.get("/Categoria",controllerCategories.index)
routes.put("/Categoria",controllerCategories.update)
routes.delete("/Categoria",controllerCategories.delete)
module.exports = routes