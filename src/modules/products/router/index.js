import { Router } from 'express';
import buyerRouter from './buy-route';
import sellerRouter from './sell-route';
import walletRouter from './wallet-route';

const router = Router();

router.use('/buyer', buyerRouter);
router.use('/seller', sellerRouter);
router.use('/wallet', walletRouter);

export default router;
