import mongoose from "mongoose";

const userProfilSchema = mongoose.Schema({
  photo: String,
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide a valid email"],
  },
});
