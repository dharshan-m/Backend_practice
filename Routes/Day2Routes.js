const express = require('express');
const router = express.Router();

const {createUser, getUser, updateUser, deleteUser} = require('../controller/day2Controller');

router.post('/create', createUser);
router.get('/get', getUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;