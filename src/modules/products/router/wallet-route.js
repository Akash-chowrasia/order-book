import { Router } from 'express';
import authMiddleware from '../../auth/service/middleware';
import httpHandler from '../../commons/http-handler';

const walletRouter = Router();

walletRouter.get(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

walletRouter.post(
  '/',
  authMiddleware.isLoggedIn,
  httpHandler(async (req, res, next) => {})
);

export default walletRouter;
