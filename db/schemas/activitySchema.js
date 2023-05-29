const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const activity = new Schema({
  name: { type: String, required: true, min: 5, max: 50 },
  description: { type: String, required: true, min: 10, max: 550 },
  activityType: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
});
const activitySchema = model("activity", activity);

module.exports = activitySchema;
