import express from "express";
import "dotenv/config";
import userRoutes from "./routes/user.routes.js"
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user",userRoutes);

app.get("/", (req, res) => {
  console.log("the utils service is running");
  res.status(200).send("users service is running ✅");
});


const PORT = Number(process.env.PORT) || 5052;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server started on http://localhost:${PORT}`);
    });