import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

//@desc  Register new user
//@route  POST/api/users

const registerUser = asyncHandler(async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { username: user.username }, token });
});
//@desc Login new user
//@route  POST/api/users/login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  // compare password
  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({ user: { username: user.username, email: user.email }, token });
};

const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    console.log(decodedToken);
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
  next();
};

const updateProfile = asyncHandler(async (req, res) => {
  const { workoutsPerWeek, birthdate, weight, fitnessGoal, fitnessLevel } =
    req.body;
  console.log(req.body);
  const userId = req.user.userId;
  console.log(userId);

  const user = await User.findById(userId);
  console.log(user);

  if (!user) {
    // Benutzer nicht gefunden
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (workoutsPerWeek !== undefined) {
    user.workoutsPerWeek = workoutsPerWeek;
  }

  if (birthdate !== undefined) {
    user.birthdate = birthdate;
  }

  if (weight !== undefined) {
    user.weight = weight;
  }
  if (fitnessGoal !== undefined) {
    user.fitnessGoal = fitnessGoal;
  }
  if (fitnessLevel !== undefined) {
    user.fitnessLevel = fitnessLevel;
  }

  await user.save();

  res.status(200).json({ message: "Profile updated successfully" });
});
//@desc get user data
//@route  GET/api/users/me
const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({ id: _id, username, email });
});

export { registerUser, loginUser, getMe, requireAuth, updateProfile };
