// mongoose allows us to connect our MongoDB + Define Schema & Models
require('dotenv').config()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on("connected", ()=>{
    console.log("Connected to mongodb");
    
})
mongoose.connection.on("error", ()=>{
    console.log("Oh no, the mongo connection failed");
    
})