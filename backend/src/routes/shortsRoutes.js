const express = require('express');
const router= express.Router();
const shortsController = require('../controllers/shortsController');

router.post('/shorts/generate',shortsController.generateShorts);

module.exports = router;
