import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const app = express()

app.get('/', (req,res) => {
    res.json({message:'5000 port'})
})

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT}. portta dinleniyor`)
})