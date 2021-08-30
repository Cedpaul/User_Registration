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
        firstName: req.body.fName,
        middleName: req.body.mName,
        lastName: req.body.lName,
        age: req.body.age,
        stAddress: req.body.stAdd,
        city: req.body.city,
        phoneNumber: req.body.phoneNum
    });

    newUser.save().then((user) => res.json(user)).catch((error) => console.log(error));
});


router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((user) => user.remove().then(() => res.json({ sucess: true })))
    .catch((err) => res.status(404).json({ sucesss: false }))
});

router.put('/:id', (req, res) => {
    let filter = { _id: req.params.id };
    let update = {
        firstName: req.body.fName,
        middleName: req.body.mName,
        lastName: req.body.lName,
        age: req.body.age,
        stAddress: req.body.stAddress,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber
    };
    User.findOneAndUpdate(filter, update)
        .then((user) => res.json(user))
        .catch((error) => console.log(error));
});


module.exports = router;