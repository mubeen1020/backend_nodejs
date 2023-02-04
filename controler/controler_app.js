const usermodel=require("../models/user")
const bcrypt =require('bcrypt')
const jwt =require("jsonwebtoken");
const { param } = require("../routes");


const Controller_app = {
// signup user start
   getusersignin:(req,res)=>{
    const {first_name,last_name,email,password}=req.body;
    if(!first_name||!last_name||!email||!password){
        res.json({
            message:"required field are missing",
            status:false
    })
    return;
    }
    const decodedpassword= bcrypt.hashSync(password,10)
   
    const objtosent={
        first_name:first_name,
        last_name:last_name,
        email:email,
        password:decodedpassword
    }
   
// for matching
usermodel.findOne({email:email},(error,user)=>{
    if(error){
        res.json({
           message:`internal error${error}`,
           status:false
        })
    }else{
        if(user){
            res.json({
                message:`Email Address Already Exists`,
                status:false
             })
        }else{
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
        }
    }
})


  
},

// login user start
   getuserlogin:(req,res)=>{
    const {email,password}=req.body;
    if((!email,!password)){
        res.json({
            
            message:"required field are missing",
            status:false
    })
    return;
    }
    usermodel.findOne({email:email},async (error,user)=>{
    //     if(user){
    //         const user =  user.findByCredentials(req.body.email, req.body.password);
    //             const token =  user.generateAuthToken();
    //             res.header("Authorization", `Bearer ${token}`).send({user, token});
    //       }
    //  else 
     if(error){
            res.json({
               message:`internal error${error}`,
               status:false
            })
        }else   if(!user){
            res.json({
               message:`internal error${error}`,
               status:false
            })
            return;
        }else{
            const { _id } = user;
            const comparepassword=bcrypt.compareSync(password,user.password)
            if(comparepassword){
                const token = await jwt.sign({ _id }, "mynamemuhammadmubeen", { expiresIn: "10000 seconds" });
                res.json({
                    message:`User Successfully Login llll`,
                    status:true,
                    user,
                    token ,
                 })
            }else{
                res.json({
                    message:`Credential Error`,
                    status:false
                 })
            }
        }
    })
    
    }
  };
  
  module.exports = Controller_app;