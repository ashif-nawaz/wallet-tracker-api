import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  deadline: {
    type: Date,
    required: true,
    minlength: 5,
  },
  priority: {
    type: String,
    required: true,
  },
  userId: { type: mongoose.ObjectId, required: true },
});

const Task = mongoose.model("task", taskSchema);

export default Task;
