import { Schema, model } from "mongoose";

interface iUser {
  email: string;
  verify: boolean;
  enrollmentID: string;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    email: {
      type: String,
      unique: true,
    },
    verify: {
      type: Boolean,
    },
    enrollmentID: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("users", userModel);
