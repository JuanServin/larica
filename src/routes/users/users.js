const express=require("express")
const routes = express.Router()
routes.post("/users",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
routes.get("/users",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
module.exports = routes
