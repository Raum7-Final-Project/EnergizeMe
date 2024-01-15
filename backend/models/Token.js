import mongoose from "mongoose";
const Schema = mongoose.Schema;

const tokenSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  token: String,
});

const Token = mongoose.model("Token", tokenSchema);
export default Token;
