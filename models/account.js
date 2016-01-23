var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true }
});

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;