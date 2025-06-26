const express = require('express');
const router = express.Router();

const {createUser} = require('../controller/day2Controller');

router.post('/create', createUser);


module.exports = router;