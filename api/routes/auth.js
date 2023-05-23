const User = require("../models/User.js");
const express = require("express");
const router = express.Router();

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
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("A new user has been registered.");
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;