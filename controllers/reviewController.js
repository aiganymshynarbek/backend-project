const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  try {
    const { rating, comment, resourceId } = req.body;
    const review = new Review({
      rating,
      comment,
      resource: resourceId,
      user: req.user.id // Кто оставил отзыв
    });
    await review.save();
    res.json(review);
  } catch (err) {
    res.status(500).send('Ошибка при добавлении отзыва');
  }
};