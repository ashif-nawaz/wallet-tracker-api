import { User } from "../../../models/index.js";

const signup = async (req, res, next) => {
  try {
    const user = new User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });
    const resp = await user.save();
    res.json(resp);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
  res.send("login");
};

export { signup, login };
