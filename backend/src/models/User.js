import mongoose from "mongoose";

// 1- create a Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
//2- model based off of that schema

const User = mongoose.model("User", userSchema);
export default User;
