const { error } = require('console');
const express = require('express');// import express js
const { default: mongoose } = require('mongoose');
const configkey ={
      DBURI:"mongodb+srv://admin:admin@cluster0.uunbkj1.mongodb.net/?retryWrites=true&w=majority",
      PORT1:process.env.PORT || 9000,
      BODY_PARCER:express.json()
}
module.exports = configkey;