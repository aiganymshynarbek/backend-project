const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Связь с пользователем
  title: { type: String, required: true },
  link: { type: String, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }, // Связь с предметом
  description: { type: String }
});

module.exports = mongoose.model('Resource', ResourceSchema);