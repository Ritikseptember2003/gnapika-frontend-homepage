const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: Number, default: 1 },
  image: { type: String },
});

module.exports = mongoose.model('CartItem', cartItemSchema);

