import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import homeRoute from "./routes/home.js";
import courseRoute from "./routes/courses.js";
import connectDB from "./db/db.js";

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/", homeRoute);
app.use("/courses", courseRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));