const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Подключаемся к базе данных
connectDB();

// Middleware для чтения JSON (чтобы сервер понимал данные от нас)
app.use(express.json());
// Маршруты
app.use('/api/auth', require('./routes/auth'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/reviews', require('./routes/reviews'));

// Простой проверочный маршрут
app.get('/', (req, res) => res.send('Сервер Библиотеки запущен! 🚀'));

// Определяем маршруты (пока закомментируем, создадим их в следующем шаге)
// app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));