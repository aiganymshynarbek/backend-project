const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('База данных подключена успешно');
  } catch (err) {
    console.error('Ошибка подключения:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;