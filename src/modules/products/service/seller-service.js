import assert from 'assert';
import createError from 'http-errors-lite';
import { StatusCodes } from 'http-status-codes';
import productModels from '../model';

const seller = {};

seller.addProduct = async ({ details, user_id }) => {
  const record = await productModels.product.create({ ...details, user_id });
};

seller.fetchProduct = async ({ user_id, query = {}, page = 1, size = 10 }) => {
  const records = productModels.product
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
  assert(
    records !== null,
    createError(StatusCodes.BAD_REQUEST, 'You dont have any product on sell')
  );
  return records;
};

seller.fetchSoldProduct = async ({
  user_id,
  query = {},
  page = 1,
  size = 10,
}) => {
  const records = productModels.sold_record
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
  assert(
    records !== null,
    createError(
      StatusCodes.BAD_REQUEST,
      'You dont have any product sold till now'
    )
  );
  return records;
};

export default seller;
