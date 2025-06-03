import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
  },
  image: {
    type: String,
  },
}, {
  timestamps: true,
});

const Product = models.Product || model('Product', productSchema);

export default Product; 