const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const activity = new Schema({
  id: Number,
  name: String,
  description: String,
  activityType: [
    {
      running: Boolean,
      swimming: Boolean,
      walking: Boolean,
      cycling: Boolean,
      hiking: Boolean,
    },
  ],

  duration: Date,
  date: Date,
});
const activitySchema = model("activity", activity);

module.exports = activitySchema;
