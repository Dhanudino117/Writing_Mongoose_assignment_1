const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number,
});

const activitySchema = new mongoose.Schema({
  lastlogin: { type: Date },
});
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String] },
  profile: profileSchema,
  activity: activitySchema,
});
