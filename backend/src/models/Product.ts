import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  stock: { type: Number, default: 0 },
});

export default mongoose.model<IProduct>('Product', ProductSchema);