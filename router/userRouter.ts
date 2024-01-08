import { Router } from "express";
import {
  createUser,
  viewAllUsers,
  viewOneUser,
} from "../controller/userController";

const router: Router = Router();

router.route("/register-user").post(createUser);
router.route("/view-one-user").get(viewOneUser);
router.route("/view-all-user").get(viewAllUsers);

export default router;
