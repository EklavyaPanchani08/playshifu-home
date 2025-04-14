import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  currentPrice: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviews: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ageRange: {
    type: String,
    enum: ['4-6', '6-8', '8-10', '10+'],
    required: true,
  },
  category: [{
    type: String,
    required: true,
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Product || mongoose.model('Product', productSchema);
