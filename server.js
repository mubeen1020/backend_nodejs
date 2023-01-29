  
const express = require('express');// import express js
const { default: mongoose } = require('mongoose');
const configkey=require("./config/Databasekeycontroler")
const router = require("./routes");
const app = express() //save method of express js in app

const PORT=configkey.PORT1;

app.use(configkey.BODY_PARCER)

mongoose.connect(configkey.DBURI)
.then(res=>console.log("mongodb connect"))
.catch(err=>console.log("error"))

//all routes
app.use(router);

app.listen(PORT, ()=>{
    console.log(`Server running localhost:${PORT}`)
 })
