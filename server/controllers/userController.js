const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const createToken = require("../utils/token");
//post login

const loginUser = async (req, res) => {
  try {
     const { email, password } = req.body;
    const user=await User.login(email, password);

    //create Token
    const token=createToken(user._id);

    res.status(200).json({email: user.email, token});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//post signup

const signUpUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user=await User.signup(email, password);

    //create Token
    const token=createToken(user._id);

    res.status(201).json({email:user.email, token});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signUpUser,
};
