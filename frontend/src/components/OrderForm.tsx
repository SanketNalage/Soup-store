import React, { useState } from 'react';
import axios from 'axios';

const OrderForm: React.FC = () => {
    const [productId, setProductId] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/orders', {
                productId,
                quantity,
                userId,
            });
            setMessage(`Order placed successfully! Order ID: ${response.data.id}`);
        } catch (error) {
            setMessage('Failed to place order. Please try again.');
        }
    };

    return (
        <div>
            <h2>Place Your Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product ID:</label>
                    <input
                        type="text"
                        value={productId}
                        onChange={(e) => setProductId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantity:</label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label>User ID:</label>
                    <input
                        type="text"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit Order</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default OrderForm;