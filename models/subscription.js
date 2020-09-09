var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

// Define fields for the Subscription Schema
var subscriptionSchema = new Schema({
  id: String,
  name: String,
  startDate: Date,
  endDate: Date,
  price: Number,
  frequency: String,
  profileID: ObjectId,
});

var Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
