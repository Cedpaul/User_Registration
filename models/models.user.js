const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    firstName: { type: String, required: true},
    middleName: { type: String, required: true },
    lastName: { type: String, required: true},
    age: { type: Number, required: true },
    stAddress: {type: String, required: true},
    city: { type: String, required: true},
    phoneNumber: {type: Number, required: true}
});

module.exports = User = mongoose.model('users', UserSchema);