import { User } from "../../../models/index.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const signup = async (req, res, next) => {
  const validationErrors = validationResult(req);

  try {
    if (!validationErrors.isEmpty()) {
      return res.json({
        status: 401,
        data: validationErrors.array(),
        message: validationErrors.array()[0].msg,
      });
    }

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashedPassword });
    res.json({
      status: 201,
      data: {
        name: user.name,
        email: user.email,
        userId: user._id,
      },
      message: "Registration successful.",
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const validationErrors = validationResult(req);
  try {
    if (!validationErrors.isEmpty()) {
      return res.json({
        status: 401,
        data: validationErrors.array(),
        message: validationErrors.array()[0].msg,
      });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    const doMatch = await bcrypt.compare(password, user.password);
    if (!doMatch) {
      throw { status: 401, message: "Invalid password" };
    }
    const token = jwt.sign(
      {
        userId: user._id,
        userName: user.name,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      status: 200,
      data: {
        token: token,
        userName: user.name,
        id: user._id,
      },
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export { signup, login };
