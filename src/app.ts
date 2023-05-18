import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema } from "mongoose";
const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app.get(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    // inserting data
    /* 
    step1: Interface creation
    step2: Schema Creation
    step3: Model Creation
    step4: Database Query
    */

    // Creating Interface
    interface IUser {
      id: string;
      role: "student";
      password: string;
      name: {
        firstName: string;
        middleName?: string;
        lastName: string;
      };
      dataOfBirth?: string;
      gender: "male" | "female";
      email?: string;
      contactNo: string;
      emergencyContactNo: string;
      presentAddress: string;
      permanentAddress: string;
    }

    // Creating schema using interface
    const userSchema = new Schema<IUser>({
      id: {
        type: String,
        required: true,
        unique: true,
      },
      role: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      name: {
        firstName: {
          type: String,
          required: true,
        },
        middleName: {
          type: String,
        },
        lastName: {
          type: String,
          required: true,
        },
      },
      dataOfBirth: {
        type: String,
      },
      gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
      },
      email: {
        type: String,
      },
      contactNo: {
        type: String,
        required: true,
      },
      emergencyContactNo: {
        type: String,
        required: true,
      },
      presentAddress: {
        type: String,
        required: true,
      },
      permanentAddress: {
        type: String,
        required: true,
      },
    });
    res.send("hello world");
    next();
  }
);
