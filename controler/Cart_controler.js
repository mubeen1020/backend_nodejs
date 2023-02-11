const Cart_model = require("../models/Cart_model")

const cart_controler ={

    // post cart data
    
    add_to_cart: async(req,res)=>{
          try{
   const cart_obj=new Cart_model({
    product_id:req.body.product_id,
    price:req.body.price,
    title:req.body.title,
    description:req.body.description,
    quantity:req.body.quantity,
    image:req.body.image
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
              { title: { $regex: search_query, $options: "i" } },
              { description: { $regex: search_query, $options: "i" } },
              { quantity: { $regex: search_query, $options: "i" } },
            ],
          });
          res.status(200).send({ success: true, data: cart_data });
        } catch (error) {
          res.status(400).send({ success: false, message: error.message });
        }
      },

      // get usin id
      get_cart_data_by_id: async(req,res)=>{
        try{
            const cart_data = await Cart_model.findById(req.params.id);
            res.status(200).send({success:true,data:cart_data});
        } catch(error){
            res.status(400).send({success:false,message:error.message});
        }
    },

    // delete api
    deleteAll: async (req, res) => {
      try {
        const deleted = await Cart_model.deleteMany({});
        res.status(200).send({ success: true, message: "All items in cart deleted successfully." });
      } catch (error) {
        res.status(400).send({ success: false, message: error.message });
      }
    },

     // Calculate total price of all items in cart
  calculateTotalPrice: async (req, res) => {
    try {
      const cart_data = await Cart_model.find({});
      let total_price = 0;
      cart_data.forEach((item) => {
        total_price += item.price * item.quantity;
      });
      res.status(200).send({ success: true, total_price });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  },
}
module.exports={
    cart_controler
}