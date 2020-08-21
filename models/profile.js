var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var profileSchema = new Schema({
    firstName: String,
    lastName: String,
    fullName: String,
    headline: String,
    skills: Array,
    phone: String,
    email: String,
    github: String,
    linkedIn: String
});

var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
