const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
  // 1. Проверяем ошибки валидации (если почта кривая или пароль короткий)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  try {
    // 2. Проверяем, нет ли уже такого пользователя
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'Такой пользователь уже есть' });
    }

    // 3. Создаем новый объект пользователя
    user = new User({ username, email, password });

    // 4. Шифруем пароль (bcrypt)
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // 5. Сохраняем в базу
    await user.save();

    // 6. Создаем JWT токен (твой "пропуск")
    const payload = { user: { id: user.id } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1d' }, // Токен живет 1 день
      (err, token) => {
        if (err) throw err;
        res.json({ token }); // Отправляем токен клиенту
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка сервера');
  }
};