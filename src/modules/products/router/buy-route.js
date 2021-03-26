import { Router } from 'express';
import httpHandler from '../../commons/http-handler';
import authMiddleware from '../../auth/service/middleware';
import productService from '../service';

const buyerRouter = Router();

buyerRouter.get(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const { query, page = 1, size = 10 } = req.query;
    const records = await productService.buyer.fetchProduct({
      user_id: userId,
      query,
      page: parseInt(page.toString(), 10),
      size: parseInt(size.toString(), 10),
    });
    res.send(records);
  })
);

buyerRouter.get(
  '/:category',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const { category } = req.params;
    const { query, page = 1, size = 10 } = req.query;
    const records = await productService.buyer.fetchCategoryProduct({
      user_id: userId,
      query,
      category,
      page: parseInt(page.toString(), 10),
      size: parseInt(size.toString(), 10),
    });
    res.send(records);
  })
);

buyerRouter.post(
  '/:product_id',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    const userId = req.user._id;
    const { product_id } = req.params;
    const { amount } = req.body;
    await productService.buyer.buyProduct({
      user_id: userId,
      product_id,
      amount,
    });
    res.send({ message: 'successful, enjoy your order' });
  })
);

buyerRouter.get(
  '/history',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {
    console.log('staged');
    const userId = req.user._id;
    const { query, page = 1, size = 10 } = req.query;
    const records = await productService.buyer.fetchBuyHistory({
      user_id: userId,
      query,
      page: parseInt(page.toString(), 10),
      size: parseInt(size.toString(), 10),
    });
    res.send(records);
  })
);

export default buyerRouter;
