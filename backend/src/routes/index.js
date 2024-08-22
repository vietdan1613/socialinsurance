const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/test', sampleController.getTest);
router.get('/sample', sampleController.getSample);
router.post('/register', sampleController.postRegister);

module.exports = router;