const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Путь: POST /api/auth/register
router.post(
  '/register',
  [
    // Валидация (минимум 3 правила по заданию)
    check('username', 'Имя обязательно').not().isEmpty(),
    check('email', 'Введите корректный email').isEmail(),
    check('password', 'Пароль должен быть не менее 6 символов').isLength({ min: 6 })
  ],
  authController.register
);

module.exports = router;