import { body } from "express-validator";

const expenseValidators = {
  add: [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Expense name must be atleast 3 character."),
    body("description")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Description must be atleast 3 character."),
    body("amount")
      .isNumeric()

      .withMessage("Amount name must be a numeric value."),

    body("date")
      .isString()
      .custom((value, { req }) => {
        return !isNaN(Date.parse(value));
      })
      .withMessage("Please enter a valid date and time."),
  ],

  edit: [
    body("_id").isString(),
    body("title")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Expense name must be atleast 3 character."),
    body("description")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Description must be atleast 3 character."),
    body("amount")
      .isNumeric()

      .withMessage("Amount name must be a numeric value."),

    body("date")
      .isString()
      .custom((value, { req }) => {
        return !isNaN(Date.parse(value));
      })
      .withMessage("Please enter a valid date and time."),
  ],

  delete: [body("_id").isString()],
};

export default expenseValidators;
