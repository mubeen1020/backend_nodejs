const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    product_id:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:false
    },
    title:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    quantity:{
        type:Number,
        required:true
    },
    image: {
        type: Buffer,
        required: false
      },
    
})
const Cartmodel=mongoose.model("cart",cartSchema);
module.exports = Cartmodel;