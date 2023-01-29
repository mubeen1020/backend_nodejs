var express = require("express");
var router = express.Router();
const Controller_app =require("../controler/controler_app")

router.post("/api/usersignup/",Controller_app.getusersignin)
router.post("/api/userlogin/",Controller_app.getuserlogin)

module.exports = router;