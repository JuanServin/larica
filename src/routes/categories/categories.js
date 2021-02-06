const express=require("express")
const routes = express.Router()
routes.post("/categories",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
routes.get("/categories",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
module.exports = routes