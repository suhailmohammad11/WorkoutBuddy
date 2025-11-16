const express=require("express");

const userRouter= express.Router();

// Require controller

const {loginUser  , signUpUser} = require("../controllers/userController")

//Login User api
userRouter.post("/login", loginUser)

//SignUp user api
userRouter.post("/signup", signUpUser)

module.exports= userRouter