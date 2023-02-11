const Form_model = require("../models/Form_model");

const Form_controler ={

    // post cart data
    
    User_cart: async(req,res)=>{
          try{
   const cart_obj=new Form_model({
    name:req.body.name,
    address:req.body.address,
    
   })
   const cart_data = await cart_obj.save();
   res.status(200).send({success:true,message:"cart success",data:cart_data})
          }catch(error){
            res.status(400).send({success:false,message:error.message})
          }
    },


}
module.exports={
    Form_controler
}