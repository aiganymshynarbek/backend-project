const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const resourceController = require('../controllers/resourceController');

router.get('/', resourceController.getResources);

router.post('/', auth, resourceController.createResource);

router.delete('/:id', auth, resourceController.deleteResource);

module.exports = router;