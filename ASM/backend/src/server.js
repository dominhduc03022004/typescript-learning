import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routes/index.js";
const app = express();
dotenv.config()

app.use(morgan("dev"));
app.use(cors());

const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

mongoose
  .connect(URI_DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING!! ON PORT http://localhost:${PORT}`);
});
