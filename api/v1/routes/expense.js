import { Router } from "express";
import { expense } from "../controllers/index.js";
import { expenseValidators } from "../../../validator/index.js";
import isAuth from "../middleware/is-Auth.js";
const router = Router();

//http://localhost:8080/api/v1/expense
router
  .route("/")
  .post(isAuth, expenseValidators.add, expense.createExpense)
  .put(isAuth, expenseValidators.edit, expense.editExpense)
  .delete(isAuth, expenseValidators.delete, expense.deleteExpense)
  .get(isAuth, expense.getAllExpense);

export default router;
