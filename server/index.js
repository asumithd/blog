import express from "express";
import BodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import postRoutes from "./routers/posts.js"

const app = express()
dotenv.config()


app.use(BodyParser.json({ limit: "30mb", extended: true }));
app.use(BodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)

// const CONNECTION_URL = "mongodb+srv://kaytech:Kaytech123@cluster0.9ktxi.mongodb.net/KayTechDB?retryWrites=true&w=majority"
// const PORT = process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(process.env.PORT, () => console.log(`Server running on port : ${process.env.PORT}`))).catch((err) => console.log(err.messages))