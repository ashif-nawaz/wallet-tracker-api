import { Router } from "express";
const router = Router();

import auth from "./auth.js";
import expense from "./expense.js";

//http://localhost:8080/api/v1
router.use("/auth", auth);
router.use("/expense", expense);

export default router;
