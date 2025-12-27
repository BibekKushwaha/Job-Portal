import express from 'express';
import { isAuth } from '../middleware/auth.middleware';
import { checkOut, paymentVerification } from '../controllers/payment.controller';

const router = express.Router();

router.post("/checkout", isAuth, checkOut);
router.post("/verify", isAuth, paymentVerification);

export default router;