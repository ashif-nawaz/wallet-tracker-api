import { Router } from "express";
const router = Router();

import auth from "./auth.js";
import task from "./task.js";

//http://localhost:8080/api/v1
router.use("/auth", auth);
router.use("/task", task);

export default router;
