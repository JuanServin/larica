const express=require("express")
const routes = express.Router()
routes.post("/products",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
routes.get("/products",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
module.exports = routes