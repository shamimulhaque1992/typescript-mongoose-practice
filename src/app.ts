import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";
const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app.get(
  "/",
  
);
/* 
    step1: Interface creation
    step2: Schema Creation
    step3: Model Creation
    step4: Database Query
    */
