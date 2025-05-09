const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: Number,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  userid: String,
  googleId: {
    type: String,
    unique: true,
    sparse: true
  },
  isPhoneVerified: {
    type: Boolean,
    default: false
  }
});

const UserModel = mongoose.model("Users", userSchema);

module.exports = { UserModel };
