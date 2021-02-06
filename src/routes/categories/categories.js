const express=require("express")
const routes = express.Router()
routes.post("/batata",(request,response)=>{
    const {email,senha} = request.body
    response.json({email,senha})
})
module.exports = routes