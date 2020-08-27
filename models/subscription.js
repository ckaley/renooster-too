var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var subscriptionSchema = new Schema({
  _id: String,
  name: String,
  slug: String,
  startDate: Date,
  endDate: Date,
  price: Number,
  frequency: String,
  icon: String,
});

var Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
