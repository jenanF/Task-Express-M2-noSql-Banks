
const account = require('../../models/Account')

exports.accountCreate = async (req, res) => {
  const newAccount = account.create(req.body)
  res.status(201).json(newAccount);
};

exports.accountDelete = async (req, res) => {
  const { accountId } = req.params;
  const foundAccount = account.findById(accountId);
  if (foundAccount) {
    await foundAccount.deleteOne(accountId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
};

exports.accountUpdate = async (req, res) => {
  const { accountId } = req.params;
  const foundAccount = account.findById(accountId);
  if (foundAccount) {
    await foundAccount.updateOne(req.body)
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Account not found' });
  }
};

exports.accountsGet = async (req, res) => {
  const accounts = account.find()
  res.status(200).json(accounts);
};

exports.getAccountByUsername = async (req, res) => {
  const { username } = req.params;
  const foundAccount = account.find({ username: username }
  );
  if (foundAccount) {
    res.status(200).json(foundAccount);
  } else {
    res.status(404).json({ message: 'Account not found' });
  }

  if (req.query.currency === 'usd') {
    const accountInUsd = { ...foundAccount, funds: foundAccount.funds * 3.31 };
    res.status(201).json(accountInUsd);
  }
  res.status(201).json(foundAccount);
};
