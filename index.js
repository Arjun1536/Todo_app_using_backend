const express = require('express')
const app = express()

//load config file from env file
require("dotenv").config()
const PORT = process.env.PORT || 400;

//Parse data using middleware

app.use(express.json())

//Import Route and use here to mount

const todoRoute = require("./routes/todoRoute")
//Mount
app.use("/api/v1/", todoRoute)

// server started
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`)
})

//get to display in browser
app.get("/",(req,res)=>{
    res.send("server started and let check db connection")
})

//connect to database
const dbConnect = require('./config/database')
dbConnect()