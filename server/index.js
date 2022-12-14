import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from './routers/userRouter.js'
import storeRouter from './routers/storeRouter.js'
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use(express.json({ limit: "20mb" }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser())

app.use("/users", userRouter);
app.use("/store", storeRouter);


app.listen(process.env.PORT, () => {
    mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("connected to db"))
      .catch((err) => console.log(err));
  });