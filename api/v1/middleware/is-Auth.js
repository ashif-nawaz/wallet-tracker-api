import User from "../../../models/user.js";
import jwtverify from "../../../utils/jwtverify.js";

export default async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");

    if (!authHeader) {
      const error = new Error("Authentication Required");
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader.split(" ")[1];
    const load = await jwtverify(token, process.env.JWT_SECRET, {});

    if (!load) {
      const error = new Error("Invalid authentication token");
      error.statusCode = 401;
      throw error;
    }
    const user = await User.findById(load.userId);

    if (!user) {
      const error = new Error("Invalid authentication token");
      error.statusCode = 403;
      throw error;
    }
    req.userId = user._id.toString();
    req.user = {
      userId: user._id.toString(),
      name: user.name,
      email: user.email,
    };
    next();
  } catch (error) {
    next(error);
  }
};
