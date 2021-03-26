import { Router } from 'express';
import productRouter from './router';

const router = Router();
router.use('/product', productRouter);

const productModule = {
  init: (app) => {
    app.use(router);
    console.log('Product module loaded');
  },
};

export default productModule;
