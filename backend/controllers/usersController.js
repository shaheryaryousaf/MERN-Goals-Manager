const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/UserModel");

// @desc    Register New User
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // Destructure data
  const { name, email, password } = req.body;

  //   Check if fields are empty
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Descrypt Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create New Uesr
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Return response of new created User
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  res.json({ message: "Register Router" });
});

// @desc    Login User
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  // Destructure data
  const { email, password } = req.body;

  // Find User
  const user = await User.findOne({ email });

  // Check if User exists and saved password is same as entered password
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// @desc    Get User Data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => { 
  res.status(200).json(req.user);
});

// Generate JWT Function
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
