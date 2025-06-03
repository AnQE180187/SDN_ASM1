import mongoose, { Schema, models, model } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

const Product = models.Product || model('Product', ProductSchema);

export default Product; 