import { Router } from "express";
import { auth } from "../controllers/index.js";
import { authValidators } from "../../../validator/index.js";
const router = Router();

//http://localhost:8080/api/v1/auth
router.route("/signup").post(authValidators.signup, auth.signup);

router.route("/login").post(authValidators.login, auth.login);

export default router;
