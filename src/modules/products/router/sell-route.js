import { Router } from 'express';
import authMiddleware from '../../auth/service/middleware';
import httpHandler from '../../commons/http-handler';

const sellerRouter = Router();

sellerRouter.post(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

sellerRouter.get(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

sellerRouter.get(
  '/sold',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

export default sellerRouter;
