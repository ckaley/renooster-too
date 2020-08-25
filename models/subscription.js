var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var subscriptionSchema = new Schema({
    name: String,
    slug: String,
    description: String,
    screenshot: String,
    github: String,
    demo: String
});

var Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
