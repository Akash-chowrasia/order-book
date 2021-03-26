import productModels from '../model';

const wallet = {};

wallet.getWallet = async (userId) => {
  const record = await productModels.wallet.findOne({ user_id: userId });
  return record;
};

wallet.addWallet = async ({ user_id, amount }) => {
  const record = await productModels.wallet.findOne({ user_id });
  await productModels.wallet.findByIdAndUpdate(record._id, {
    amount: record.amount + amount,
  });
};

export default wallet;
