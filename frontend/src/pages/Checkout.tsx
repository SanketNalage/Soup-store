import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../api/axios';
import Cart from '../components/Cart';
import OrderForm from '../components/OrderForm';

const Checkout: React.FC = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);
    const [totalAmount, setTotalAmount] = useState<number>(0);
    const history = useHistory();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
        const total = storedCart.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
        setTotalAmount(total);
    }, []);

    const handleOrderSubmit = async (orderData: any) => {
        try {
            await axios.post('/api/orders', orderData);
            localStorage.removeItem('cart');
            history.push('/'); // Redirect to home after successful order
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            <Cart items={cartItems} />
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <OrderForm onSubmit={handleOrderSubmit} />
        </div>
    );
};

export default Checkout;