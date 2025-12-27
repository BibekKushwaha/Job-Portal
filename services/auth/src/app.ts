import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.route.js"
import { connectKafka } from "./producer.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
connectKafka();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  console.log("GET / hit");
  res.send("Auth service is running ✅");
});

app.use((req, res) => {
  console.log("404 HIT:", req.method, req.originalUrl);
  res.status(404).json({ message: "Route not found" });
});


export default app;
