import { connect } from "mongoose";
import env from "dotenv";
env.config();

const URL: string = process.env.DATABASE_URL!;
export const dbConfig = async () => {
  try {
    return connect(URL)
      .then(() => {
        console.log("database connected...");
      })
      .catch((err) => console.error());
  } catch (error) {
    return error;
  }
};
