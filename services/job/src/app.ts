import express from 'express';
import jobRoutes from './routes/job.routes.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/job", jobRoutes);

export default app;