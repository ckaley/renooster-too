var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
});

var Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
