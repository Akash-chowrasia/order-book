import { Router } from 'express';
import authMiddleware from '../../auth/service/middleware';
import httpHandler from '../../commons/http-handler';
import productService from '../service';

const sellerRouter = Router();

sellerRouter.post(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const details = req.body;
    await productService.seller.addProduct({ user_id: userId, details });
    res.send({ message: 'product added successfully for sell' });
  })
);

sellerRouter.get(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const { query, page = 1, size = 10 } = req.query;
    const records = await productService.seller.fetchProduct({
      user_id: userId,
      query,
      page: parseInt(page.toString(), 10),
      size: parseInt(size.toString(), 10),
    });
    res.send(records);
  })
);

sellerRouter.get(
  '/sold',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const { query, page = 1, size = 10 } = req.query;
    const records = await productService.seller.fetchSoldProduct({
      user_id: userId,
      query,
      page: parseInt(page.toString(), 10),
      size: parseInt(size.toString(), 10),
    });
    res.send(records);
  })
);

export default sellerRouter;
