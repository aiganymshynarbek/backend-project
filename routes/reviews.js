const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const reviewController = require('../controllers/reviewController');

router.post('/', auth, reviewController.addReview);

module.exports = router;