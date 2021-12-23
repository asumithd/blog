import express from "express";
import BodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routers/posts.js"

const app = express()



app.use(BodyParser.json({ limit: "30mb", extended: true }));
app.use(BodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes)

const CONNECTION_URL = "mongodb+srv://kaytech:Kaytech123@cluster0.9ktxi.mongodb.net/KayTechDB?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))).catch((err) => console.log(err.messages))