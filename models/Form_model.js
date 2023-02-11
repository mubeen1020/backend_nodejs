const mongoose=require("mongoose")

const FormSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
  
    
})
const Form_model=mongoose.model("User Order",FormSchema);
module.exports = Form_model;