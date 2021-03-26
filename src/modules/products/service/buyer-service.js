import assert from 'assert';
import createError from 'http-errors-lite';
import { StatusCodes } from 'http-status-codes';
import productModels from '../model';

const buyer = {};

buyer.fetchProduct = async ({ user_id, query = {}, page = 1, size = 10 }) => {
  const records = await productModels.product
    .find(
      {
        user_id: { $ne: user_id },
        ...query,
      },
      { __v: 0 }
    )
    .sort({ date: 1 })
    .skip((page - 1) * size)
    .limit(size);
  assert(
    records !== null,
    createError(
      StatusCodes.BAD_REQUEST,
      'Sorry, we dont have any product at this time'
    )
  );
  return records;
};

buyer.fetchCategoryProduct = async ({
  user_id,
  category,
  query = {},
  page = 1,
  size = 10,
}) => {
  const records = await productModels.product
    .find(
      {
        user_id: { $ne: user_id },
        category,
        ...query,
      },
      { __v: 0 }
    )
    .sort({ date: 1 })
    .skip((page - 1) * size)
    .limit(size);
  assert(
    records !== null,
    createError(StatusCodes.BAD_REQUEST, 'Sorry, we dont have any product')
  );
  return records;
};

buyer.buyProduct = async ({ user_id, product_id, amount }) => {
  const userWallet = await productModels.wallet.findOne({ user_id });
  const product = await productModels.product.findById(product_id);
  assert(
    product.amount >= amount,
    createError(StatusCodes.BAD_REQUEST, 'insufficient amount')
  );
  assert(
    product.price * amount <= userWallet.amount,
    createError(StatusCodes.NOT_ACCEPTABLE, 'insufficient wallet money')
  );
  const sellerWallet = await productModels.wallet.findOne({
    user_id: product.user_id,
  });
  await productModels.product.findByIdAndUpdate(product_id, {
    amount: product.amount - amount,
  });
  await productModels.buy_record.create({
    product_id,
    user_id,
    name: product.name,
    amount,
    price: product.price * amount,
  });
  await productModels.sold_record.create({
    product_id,
    user_id: product.user_id,
    name: product.name,
    price: product.price * amount,
  });
  await productModels.wallet.findByIdAndUpdate(userWallet._id, {
    amount: userWallet.amount - product.price * amount,
  });
  await productModels.wallet.findByIdAndUpdate(sellerWallet._id, {
    amount: sellerWallet.amount + product.price * amount,
  });
};

buyer.fetchBuyHistory = async ({
  user_id,
  query = {},
  page = 1,
  size = 10,
}) => {
  console.log('stage 1');
  const records = await productModels.buy_record
    .find(
      {
        user_id,
        ...query,
      },
      { __v: 0 }
    )
    .sort({ date: 1 })
    .skip((page - 1) * size)
    .limit(size);
  console.log('stage 2');
  assert(
    records !== null,
    createError(StatusCodes.BAD_REQUEST, 'You dont bought any product')
  );
  console.log('stage 3');
  return records;
};

export default buyer;
