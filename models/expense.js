import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  description: {
    type: String,
    required: true,
    minlength: 3,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    minlength: 5,
  },

  userId: { type: mongoose.ObjectId, required: true },
});

const Expense = mongoose.model("expense", expenseSchema);

export default Expense;
