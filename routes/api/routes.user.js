const express = require('express');
const router = express.Router();

const User = require('../../models/models.user');

router.get('/', (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((error) => console.log(error))
});

router.post('/', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        age: req.body.age,
        stAddress: req.body.stAddress,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber
    });

    newUser.save().then((user) => res.json(user)).catch((error) => console.log(error));
});


router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ sucess: true })))
    .catch((err) => res.status(404).json({ sucesss: false }))
});


module.exports = router;