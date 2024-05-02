const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dasishivapranav:shiva123dasi@cluster0.8gehv6b.mongodb.net/loginApi"); // Replace "your connection string" with your actual MongoDB connection string

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
