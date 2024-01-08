import { Request, Response } from "express";
import userModel from "../model/userModel";
import crypto from "crypto";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const token = crypto.randomBytes(3).toString("hex");
    const enrollmentID = crypto.randomBytes(2).toString("hex");
    const user = await userModel.create({ email, enrollmentID, token });

    return res.status(200).json({
      message: "user registered",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error",
    });
  }
};
