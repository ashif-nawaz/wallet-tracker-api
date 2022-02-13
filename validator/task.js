import { body } from "express-validator";

const taskValidators = {
  task: [
    body("title")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Task name must be atleast 3 character."),

    body("deadline")
      .isString()
      .custom((value, { req }) => {
        return !isNaN(Date.parse(value));
      })
      .withMessage("Please enter a valid deadline date and time."),

    body("priority").isString().withMessage("Please enter valid priority."),
  ],
};

export default taskValidators;
