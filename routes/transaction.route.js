const express = require('express');
const transactionControllers = require('../controllers/transaction.controller');
var router = express.Router();

router.get('', transactionControllers.index);

router.get('/create', transactionControllers.create);

module.exports = router;