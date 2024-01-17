import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, "Please tell us your name"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "please provide a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
    },
    verified: { type: Boolean, default: false },

    fitnessLevel: {
      type: String,
      enum: ["Anfänger", "Fortgeschrittener"],
    },
    fitnessGoal: {
      type: String,
      enum: ["Abnehmen", "Straffen", "Muskelaufbau", "Beweglichkeit"],
    },

    workoutsPerWeek: {
      type: Number,
    },
    birthdate: {
      type: Date,
    },
    weight: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, username: this.username },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    console.log(candidatePassword);
    console.log(this.password);
    return isMatch;
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

const User = mongoose.model("User", userSchema);
export default User;
