var express = require("express");
const { cart_controler } = require("../controler/Cart_controler");
var cart_router = express.Router();


cart_router.post("/api/add-to-cart/",cart_controler.add_to_cart)
cart_router.get("/api/add-to-cart/",cart_controler.get_cart_data)
cart_router.get("/api/search-cart/",cart_controler.search_cart)
cart_router.get("/api/cart/:id", cart_controler.get_cart_data_by_id);
cart_router.delete("/api/add-to-cart/", cart_controler.deleteAll);
cart_router.get("/api/cart/total_price", cart_controler.calculateTotalPrice);

module.exports = cart_router;


