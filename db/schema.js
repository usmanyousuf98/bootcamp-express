const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const users = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true, min: 5, max: 50 },
  email: { type: String, required: true, min: 5, max: 50 },
  password: { type: String, required: true, min: 8, max: 32 },
});

const usersSchema = model("users", users);

module.exports = usersSchema;
