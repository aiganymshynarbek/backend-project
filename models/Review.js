const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resource: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String }
});

module.exports = mongoose.model('Review', ReviewSchema);