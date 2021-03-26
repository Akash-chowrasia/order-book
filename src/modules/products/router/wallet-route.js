import { Router } from 'express';
import authMiddleware from '../../auth/service/middleware';
import httpHandler from '../../commons/http-handler';
import productService from '../service';

const walletRouter = Router();

walletRouter.get(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const record = await productService.wallet.getWallet(userId);
    res.send(record);
  })
);

walletRouter.post(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const { amount } = req.body;
    await productService.wallet.addWallet({ user_id: userId, amount });
    res.send({ message: 'updated successfully' });
  })
);

export default walletRouter;
