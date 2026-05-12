const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // 1. Берем токен из заголовков запроса
  const token = req.header('x-auth-token');

  // 2. Если токена нет — отказываем в доступе
  if (!token) {
    return res.status(401).json({ msg: 'Нет токена, авторизация отклонена' });
  }

  // 3. Проверяем токен
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Добавляем данные пользователя в запрос
    next(); // Идем дальше к контроллеру
  } catch (err) {
    res.status(401).json({ msg: 'Токен невалиден' });
  }
};