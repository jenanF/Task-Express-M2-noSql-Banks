let accounts = require('./accounts');
const express = require('express');
const app = express();
const accountsRoutes = require('./api/accounts/accounts.routes');

app.use(express.json());
app.use('/accounts', accountsRoutes);
const connectDb = require("./database");

connectDb();

app.listen(8000, () => {
  console.log('The application is running on localhost:8000');
});
