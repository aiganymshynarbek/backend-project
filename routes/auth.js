const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

router.post(
  '/register',
  [
    check('username', 'Имя обязательно').not().isEmpty(),
    check('email', 'Введите корректный email').isEmail(),
    check('password', 'Пароль должен быть не менее 6 символов').isLength({ min: 6 })
  ],
  authController.register
);

module.exports = router;