import { Router } from 'express';
import buyerRouter from './bye-route';
import sellerRouter from './sell-route';
import walletRouter from './wallet-route';

const router = Router();

router.use('/bye', buyerRouter);
router.use('/sell', sellerRouter);
router.use('/wallet', walletRouter);

export default router;
