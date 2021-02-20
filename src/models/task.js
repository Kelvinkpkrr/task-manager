const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  //Schema options
  //set timestamps. Adds created at and last updated field
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
