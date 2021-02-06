const express=require("express")
const routes = express.Router()
routes.post("/admin",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
routes.get("/admin",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
module.exports = routes