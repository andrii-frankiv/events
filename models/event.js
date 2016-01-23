var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    account_id: String,
    address: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isActive: Boolean,
    created: Date
});

var Event = mongoose.model('Event', eventSchema);

module.exports = Event;
