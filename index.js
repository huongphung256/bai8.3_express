const express = require('express');
var bodyParser = require('body-parser')

var userRoute = require('./routes/user.route');
var bookRoute = require('./routes/book.rotue');
var transactionRoute = require('./routes/transaction.route');

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/books', bookRoute);
app.use('/transactions', transactionRoute);

app.listen(3000, function() {
  console.log('Server listening on port ' + 3000);
});