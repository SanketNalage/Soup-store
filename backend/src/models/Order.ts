import mongoose, { Document, Schema } from 'mongoose';

export interface IOrder extends Document {
    userId: string;
    productId: string;
    quantity: number;
    status: 'pending' | 'completed' | 'canceled';
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending',
    },
}, {
    timestamps: true,
});

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;