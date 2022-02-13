import { User } from "../../../models/index.js";
import { validationResult } from "express-validator";

const signup = async (req, res, next) => {
  const validationErrors = validationResult(req);
  try {
    // const user = new User({
    //   name: req.body.name,
    //   username: req.body.username,
    //   email: req.body.email,
    //   password: req.body.password,
    //   phone: req.body.phone,
    // });
    // const resp = await user.save();
    res.json(validationErrors.array());
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const validationErrors = validationResult(req);
  try {
    res.json(validationErrors.array());
  } catch (error) {
    next(error);
  }
};

export { signup, login };
