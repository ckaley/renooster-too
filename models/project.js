var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: String,
    slug: String,
    description: String,
    screenshot: String,
    github: String,
    demo: String
});

var Project = mongoose.model('Project', projectSchema);

module.exports = Project;
