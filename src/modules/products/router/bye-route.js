import { Router } from 'express';
import httpHandler from '../../commons/http-handler';
import authMiddleware from '../../auth/service/middleware';

const buyerRouter = Router();

buyerRouter.get(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

buyerRouter.get(
  '/:category',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

buyerRouter.post(
  '/:product_id',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

export default buyerRouter;
