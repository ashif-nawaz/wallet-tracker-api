import { Task } from "../../../models/index.js";
import { validationResult } from "express-validator";

const createTask = async (req, res, next) => {
  const validationErrors = validationResult(req);
  try {
    // const task = new Task({
    //   title: req.body.title,
    //   deadline: new Date(),
    //   priority: req.body.priority,
    //   userId: "6207c567b06cab4e77775b98",
    // });

    // const resp = await task.save();
    res.json(validationErrors.array());
  } catch (error) {
    next(error);
  }
};

const getAllTask = async (req, res, next) => {
  try {
    const resp = await Task.find({ userId: "6207c567b06cab4e77775b98" });
    res.json(resp);
  } catch (error) {
    next(error);
  }
};

export { createTask, getAllTask };
