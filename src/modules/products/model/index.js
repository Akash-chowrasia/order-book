import product from './product-model';
import byeRecord from './buy-product-model';
import soldRecord from './sold-product-model';
import wallet from './wallet-model';

const productModels = {
  product,
  sold_record: soldRecord,
  buy_record: byeRecord,
  wallet,
};

export default productModels;
