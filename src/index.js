const express=require("express")
const app=express()
const routes=require("./routes/address/address.js")
app.use(routes)
app.use(express.json())
app.listen(3000)