import { Router } from "express";
import { auth } from "../controllers/index.js";

const router = Router();

//http://localhost:8080/api/v1/auth
router.route("/signup").post(auth.signup);

router.route("/login").post(auth.login);

export default router;
