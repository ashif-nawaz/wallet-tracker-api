import { Router } from "express";
import { task } from "../controllers/index.js";

const router = Router();

//http://localhost:8080/api/v1/task
router.route("/").post(task.createTask).get(task.getAllTask);

export default router;
