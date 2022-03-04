import { Expense } from "../../../models/index.js";
import { validationResult } from "express-validator";

const createExpense = async (req, res, next) => {
  const validationErrors = validationResult(req);
  try {
    if (!validationErrors.isEmpty()) {
      return res.json({
        status: 401,
        data: null,
        message: validationErrors.array()[0].msg,
      });
    }

    const expense = new Expense({
      title: req.body.title,
      date: new Date(req.body.date),
      description: req.body.description,
      amount: req.body.amount,
      userId: req.userId,
    });

    const resp = await expense.save();
    const allExpenses = await Expense.find({ userId: req.userId });
    res.json({
      status: 200,
      data: allExpenses,
      message: "Expense saved.",
    });
  } catch (error) {
    next(error);
  }
};

const getAllExpense = async (req, res, next) => {
  try {
    const resp = await Expense.find({ userId: req.userId });
    res.json({
      status: 200,
      data: resp,
      message: "Success",
    });
  } catch (error) {
    next(error);
  }
};

const editExpense = async (req, res, next) => {
  const validationErrors = validationResult(req);
  try {
    if (!validationErrors.isEmpty()) {
      return res.json({
        status: 401,
        data: null,
        message: validationErrors.array()[0].msg,
      });
    }
    const { _id, title, date, description, amount } = req.body;
    // const expense = new Expense({
    //   title: req.body.title,
    //   date: new Date(req.body.date),
    //   description: req.body.description,
    //   amount: req.body.amount,
    //   userId: "6221d0bea0a91216a2afb8b2",
    // });

    const resp = await Expense.updateOne(
      { _id: _id },
      {
        $set: {
          title: title,
          date: date,
          description: description,
          amount: amount,
        },
      }
    );
    const allExpenses = await Expense.find({ userId: req.userId });
    res.json({
      status: 200,
      data: allExpenses,
      message: "Expense saved.",
    });
  } catch (error) {
    next(error);
  }
};
const deleteExpense = async (req, res, next) => {
  const validationErrors = validationResult(req);
  console.log(req.body);
  try {
    if (!validationErrors.isEmpty()) {
      return res.json({
        status: 401,
        data: null,
        message: validationErrors.array()[0].msg,
      });
    }
    const { _id } = req.body;
    console.log(_id);
    const resp = await Expense.deleteOne({ _id: _id });
    const allExpenses = await Expense.find({ userId: req.userId });
    res.json({
      status: 200,
      data: allExpenses,
      message: "Expense Deleted.",
    });
  } catch (error) {
    next(error);
  }
};

export { createExpense, getAllExpense, editExpense, deleteExpense };
