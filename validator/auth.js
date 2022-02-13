import { body } from "express-validator";
import { User } from "../models/index.js";

const authValidators = {
  signup: [
    body("name")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Name must be atleast 3 character."),

    body("username")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Username must be atleast 3 character."),

    body("email")
      .isEmail()
      .withMessage("Please enter valid email.")
      .custom(async (value, { req }) => {
        const user = await User.findOne({ email: value });
        if (user) {
          return Promise.reject("User with this email already exist.");
        }
      }),

    body("password").isStrongPassword({
      minLength: 8,
      minNumbers: 1,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1,
    }),

    body("phone")
      .isMobilePhone("en-IN")
      .withMessage("Please enter valid mobile number."),
  ],

  login: [
    body("email")
      .isEmail()
      .withMessage("Please enter valid email.")
      .custom(async (value, { req }) => {
        const user = await User.findOne({ email: value });
        if (!user) {
          return Promise.reject("Please create an account.");
        }
      }),

    body("password")
      .isStrongPassword({
        minLength: 8,
        minNumbers: 1,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
      })
      .withMessage("Please enter a valid password."),
  ],
};

export default authValidators;
