import express from 'express';
import 'dotenv/config';
import Razorpay from 'razorpay';
import cors from 'cors';
import paymentRoutes from "./routes/payment.routes.js"

const key_id = process.env.RAZORPAY_KEY_ID;
const key_secret = process.env.RAZORPAY_KEY_SECRET;

if (!key_id || !key_secret) {
  throw new Error('Razorpay credentials are not configured');
}

export const instance = new Razorpay({
  key_id,
  key_secret,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/payment", paymentRoutes);

app.get("/",(req,res)=>{
    console.log("payment service is running");
    res.status(200).send("the payment service is running");
})

app.listen(process.env.PORT, () => {
  console.log(`Payment Service is running on ${process.env.PORT}`);
});
