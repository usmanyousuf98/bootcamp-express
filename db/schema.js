const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const users = new Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
});

const usersSchema = model("users", users);

// const activity = new Schema({
//   name: String,
//   description: String,
//   activityType: [
//     {
//       running: Boolean,
//       walking: Boolean,
//       hikin: Boolean,
//       swimming: Boolean,
//       cycling: Boolean,
//     },
//   ],
//   duration: String,
//   date: Date,
// });
// const activitySchema = model("activity", activity);
module.exports = usersSchema;
