const mongoose = require('mongoose')
const schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, defaults: '' },
    email: { type: String, default: '' },
    password: { type: String, default: '' },
})