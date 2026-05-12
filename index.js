const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

// Middleware для чтения JSON
app.use(express.json());
// Маршруты
app.use('/api/auth', require('./routes/auth'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/subjects', require('./routes/subjects'));
app.use('/api/reviews', require('./routes/reviews'));

app.get('/', (req, res) => res.send('Сервер Библиотеки запущен! 🚀'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`));