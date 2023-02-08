const Cart_model = require("../models/Cart_model")

const cart_controler ={

    // post cart data
    
    add_to_cart: async(req,res)=>{
          try{
   const cart_obj=new Cart_model({
    product_id:req.body.product_id,
    price:req.body.price,
    store_id:req.body.store_id,
    vendor_id:req.body.vendor_id
   })
   const cart_data = await cart_obj.save();
   res.status(200).send({success:true,message:"cart success",data:cart_data})
          }catch(error){
            res.status(400).send({success:false,message:error.message})
          }
    },

    // get cart data

    get_cart_data: async(req,res)=>{
        try{
            const cart_data = await Cart_model.find({});
            res.status(200).send({success:true,data:cart_data});
        } catch(error){
            res.status(400).send({success:false,message:error.message});
        }
    },

    // search cart data

    search_cart: async (req, res) => {
        try {
          const search_query = req.query.search_query;
          const cart_data = await Cart_model.find({
            $or: [
              { product_id: { $regex: search_query, $options: "i" } },
              { price: { $regex: search_query, $options: "i" } },
              { store_id: { $regex: search_query, $options: "i" } },
              { vendor_id: { $regex: search_query, $options: "i" } },
            ],
          });
          res.status(200).send({ success: true, data: cart_data });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      },
}
module.exports={
    cart_controler
}