const { error } = require('console');
const express = require('express');// import express js
const { default: mongoose } = require('mongoose');
const usermodel=require("./models/user")

const app = express() //save method of express js in app

const PORT=process.env.PORT || 4000;
app.use(express.json())
const DBURI="mongodb+srv://admin:admin@cluster0.uunbkj1.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DBURI)
.then(res=>console.log("mongodb connect"))
.catch(err=>console.log("error"))

app.get("/api/user/:userId",(req,res)=>{
//     console.log(req.params)
const {userID}=req.params

 const query=req.query
console.log(query,"userID")
usermodel.findById(userID,(error,data)=>{
    if(error){
        res.json({
           message:`internal error${error}`,
           status:false
        })
    }else{
        console.log("data",data)
        res.json({
            message:"User Successful get",
            data:data,
            status:true
        })
    }
})

})

app.post("/api/user",(req,res)=>{
    console.log(req.body)
    const {first_name,last_name,email,password}=req.body;
    if(!first_name||!last_name||!email||!password){
        res.json({
            message:"required field are missing",
            status:false
    })
    }
   
    const objtosent={
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:password
    }


    usermodel.create(objtosent,(error,data)=>{
if(error){
    res.json({
       message:`internal error${error}`,
       status:false
    })
}else{
    res.json({
        message:"User Successful Created",
        data:data,
        status:true
    })
}
    })
  
})

app.listen(PORT, ()=>{
    console.log(`Server running localhost:${PORT}`)
 })



