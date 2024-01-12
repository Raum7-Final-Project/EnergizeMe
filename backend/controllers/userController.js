import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import BadRequestError from "../errors/bad-request.js";
import UnauthenticatedError from "../errors/unauthenticated.js";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import Token from "../models/Token.js";
import sendEmail from "../utils/email.js";

//@desc  Register new user
//@route  POST/api/users

const registerUser = asyncHandler(async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  const verificationToken = new Token({ userId: user._id, token });

  await verificationToken.save();

  const verificationLink = `${process.env.BASE_URL}/api/users/verify/${user._id}/${token}`;
  console.log(verificationLink);

  await sendEmail(user.email, "Verify Email", verificationLink);

  res.status(StatusCodes.CREATED).json({
    user: { username: user.username, id: user._id },
    token,
    message: "An email sent to your account. Please verify",
  });
});

const verificationUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    console.log(req.params.id);

    if (!user) return res.status(400).send("Invalid ");

    const token = await Token.findOne({
      userId: user._id,
      token: req.params.token,
    });

    if (!token) return res.status(400).send("Invalid link");
    console.log(token);

    await User.updateOne({ _id: user._id }, { $set: { verified: true } });

    //await Token.findByIdAndDelete(token._id);
    // await Token.findOneAndDelete({ userId: user.id, token: req.params.token });

    console.log(`Deleted token with ID: ${token.userId}`);

    res.send("email verified sucessfully");
  } catch (error) {
    console.error(error);
    res.status(400).send("An error occurred");
  }
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
    throw new UnauthenticatedError("Invalid Password or Email");
  }
  // compare password
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user: { username: user.username, email: user.email },
    token,
    message: "An email sent to your account. Please verify.",
  });
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

  user.workoutsPerWeek =
    workoutsPerWeek !== undefined ? workoutsPerWeek : user.workoutsPerWeek;
  user.fitnessGoal = fitnessGoal !== undefined ? fitnessGoal : user.fitnessGoal;
  user.fitnessLevel =
    fitnessLevel !== undefined ? fitnessLevel : user.fitnessLevel;

  await user.save();

  res.status(200).json({ message: "Profile updated successfully" });
});
//@desc get user data
//@route  GET/api/users/me
const getMe = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({ id: _id, username, email });
});

export {
  registerUser,
  loginUser,
  getMe,
  requireAuth,
  updateProfile,
  verificationUser,
};
