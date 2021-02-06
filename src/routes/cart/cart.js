const express=require("express")
const routes = express.Router()
routes.post("/cart",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
routes.get("/cart",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
module.exports = routes