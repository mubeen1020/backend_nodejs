  
const express = require('express');// import express js
const { default: mongoose } = require('mongoose');
const configkey=require("./config/Databasekeycontroler")
const app = express() //save method of express js in app

const PORT=configkey.PORT1;

app.use(configkey.BODY_PARCER)

mongoose.connect(configkey.DBURI)
.then(res=>console.log("mongodb connect"))
.catch(err=>console.log("error"))

//Auth routes
const router = require("./routes/index");
app.use(router);

// Add-to-Cart route
const cart_router=require("./routes/Cart_route")
app.use(cart_router)

app.listen(PORT, ()=>{
    console.log(`Server running localhost:${PORT}`)
 })
