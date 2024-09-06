import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

export const Todo = mongoose.model("Todo", todoSchema);
