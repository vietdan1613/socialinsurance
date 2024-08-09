const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/sample', sampleController.getSample);
router.get('/register', sampleController.postRegister);
router.get('/register2', sampleController.postRegister2);

module.exports = router;
