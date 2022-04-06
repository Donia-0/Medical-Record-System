const mongoose = require("mongoose");
const validator = require("validator");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    // validate(email) {
    //   if (!validator.isEmail(email)) {
    //     throw new Error("Email is invalid");
    //   }
    // },
  },
  password: {
    type: String,
    required: true,
  },
  nationalId: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  birthdate: {
    type: Date,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
  socialStatus: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
});

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), token: user.token },
    "huadab^2zedo"
  );
  user.token = token;
  await user.save();

  return token;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
