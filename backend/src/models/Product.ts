import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
    category?: string;
}

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;