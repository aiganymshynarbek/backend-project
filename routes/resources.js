const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const resourceController = require('../controllers/resourceController');

// Получить все (доступно всем)
router.get('/', resourceController.getResources);

// Создать (только с токеном)
router.post('/', auth, resourceController.createResource);

// Удалить (только с токеном)
router.delete('/:id', auth, resourceController.deleteResource);

module.exports = router;