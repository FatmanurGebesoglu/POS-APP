const User = require("../models/User.js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

//! Get all users
router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
});

//! Add a user (register)
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).json("A new user has been registered.");
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;