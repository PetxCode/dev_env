import { Router } from "express";
import { createUser } from "../controller/userController";

const router: Router = Router();

router.route("/register-user").post(createUser);

export default router;
