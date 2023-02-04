const mongoose=require("mongoose")
const jwt =require("jsonwebtoken")

const userSchema=mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    tokens: [{
        token: {
          type: String,
          required: true
        }
      }]
})
userSchema.methods.generateAuthToken =async function (){
    try{
        const token_login= await jwt.sign({_id:this._id},process.env.SECRET_KEY,{expiresIn:"2 seconds"});
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
        
    }catch (err){
        console.log(err)
    }
} 

const usermodel=mongoose.model("user",userSchema)

module.exports=usermodel;