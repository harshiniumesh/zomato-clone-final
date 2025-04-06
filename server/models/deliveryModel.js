const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  imageUrl: String,
  discountText: String,
  name: String,
  rating: Number,
  diningRating: Number,
  cuisine: [String],
  cost: Number,
  deliveryTime: Number,
  safeDelivery: Boolean,
});

const Delivery = mongoose.model("delivery", deliverySchema);

module.exports = Delivery;
