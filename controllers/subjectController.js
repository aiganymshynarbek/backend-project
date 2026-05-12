const Subject = require('../models/Subject');

exports.createSubject = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newSubject = new Subject({ name, description });
        const subject = await newSubject.save();
        res.json(subject);
    } catch (err) {
        res.status(500).send('Ошибка при создании предмета');
    }
};

exports.getSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.json(subjects);
    } catch (err) {
        res.status(500).send('Ошибка сервера');
    }
};