var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Define fields for the Subscription Schema
var subscriptionSchema = new Schema({
  id: String,
  name: String,
  startDate: Date,
  endDate: Date,
  price: Number,
  frequency: String,
  icon: String,
});

var Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
