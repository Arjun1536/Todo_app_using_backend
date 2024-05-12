const express = require('express')
const app = express()

//Load config from env file
require('dotenv').config()
const PORT = process.env.PORT || 400;
//Parser is required 
const Parser = require("body-parser")
app.use(Parser.json())

app.listen(300,()=>{
    console.log("server listen on 3000")
})

// Response like print in browser

app.get('/', (req,res) =>{
    res.send("hey this will print in webrowser");
})

//Post Request -> Submit the request

app.post('/showroom/car',(req,res)=>{
    const {name,brand} = req.body
    console.log(name)
    console.log(brand)
    res.send("car send successfully")
})

//Mongoose Connection with MongoDB using mongoose

// const mongoose = require('mongoose')
// data_url = "mongodb://127.0.0.1:27017/showroom"
// async function connectToMongo() {
//     await mongoose.connect(data_url).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
//   }
  
//   module.exports = connectToMongo;