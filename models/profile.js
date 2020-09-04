var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define fields for the Profile Schema
var profileSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String },
  email: { type: String },
});

var Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
