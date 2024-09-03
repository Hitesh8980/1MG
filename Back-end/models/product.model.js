const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price:{type:Number,require:true},
  rating: { type: Number, default: 0 }, 
  category: { type: String, required: true },
  reviewsCount: { type: Number, default: 0 },
  highlights: [String], 
  description: { type: String, required: true },
  mainImage: { type: String, required: true }, 
  additionalImages: [String] 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
