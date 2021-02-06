const express=require("express")
const routes = express.Router()
routes.post("/address",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
routes.get("/address",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
module.exports = routes