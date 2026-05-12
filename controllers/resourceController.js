const Resource = require('../models/Resource');

// 1. Создать материал
exports.createResource = async (req, res) => {
  try {
    const { title, link, description } = req.body;
    const newResource = new Resource({
      title,
      link,
      description,
      user: req.user.id // ID берется из токена автоматически!
    });
    const resource = await newResource.save();
    res.json(resource);
  } catch (err) {
    res.status(500).send('Ошибка при сохранении');
  }
};

// 2. Получить все материалы
exports.getResources = async (req, res) => {
  try {
    const resources = await Resource.find().populate('user', ['username']);
    res.json(resources);
  } catch (err) {
    res.status(500).send('Ошибка сервера');
  }
};

// 3. Удалить материал
exports.deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) return res.status(404).json({ msg: 'Материал не найден' });

    // Проверяем, что удаляет именно тот, кто создал
    if (resource.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Нет прав на удаление' });
    }

    await resource.deleteOne();
    res.json({ msg: 'Материал удален' });
  } catch (err) {
    res.status(500).send('Ошибка при удалении');
  }
};