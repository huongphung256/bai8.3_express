const express = require('express');
const userControllers = require('../controllers/user.controller');
var router = express.Router();

router.get('/', userControllers.index);

router.get('/add', userControllers.add);

router.get('/:id/delete', userControllers.delete);

router.get('/users/:id/update', userControllers.update);

router.post('/:id/update', userControllers.postUpdate);

router.post('/add', userControllers.postAdd);

module.exports = router;